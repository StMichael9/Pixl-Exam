import jwt from 'jsonwebtoken';
import http from 'http';
import bcrypt from 'bcrypt';
import prisma from './prisma/client.js';
import handlePayments from './payments.js';
import nodemailer from 'nodemailer'; // Added import for nodemailer

const JWT_SECRET = 'your-secret-key';
const PORT = process.env.PORT || 3001;
const adminEmails = ['michaelegenamba@gmail.com', 'stmichaelegenamba@gmail.com'];
const corsHeaders = {
'Access-Control-Allow-Origin': 'https://pixl-exam.vercel.app',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Helper functions
const parseBody = req => new Promise((resolve, reject) => {
  let body = '';
  req.on('data', chunk => body += chunk.toString());
  req.on('end', () => {
    try { resolve(body ? JSON.parse(body) : {}); } 
    catch (error) { reject(error); }
  });
});

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, { 'Content-Type': 'application/json', ...corsHeaders });
  res.end(JSON.stringify(data));
};

const handleError = (res, error, message = 'Server error') => {
  console.error(`${message}:`, error);
  sendJson(res, 500, { error: message });
};

const authenticateToken = (req, res, callback) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return sendJson(res, 401, { error: 'Authentication required' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return sendJson(res, 403, { error: 'Invalid or expired token' });
    req.user = user;
    callback();
  });
};

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',  // Using Gmail service
  auth: {
    user: 'michaelegenamba@gmail.com',     // Your Gmail address
    pass: 'zisp nbdt llle yjec'              // Your app password
  }
});

// Auth handlers
const auth = {
  register: async (req, res) => {
    try {
      const { email, password, isAdmin } = await parseBody(req);
      const shouldBeAdmin = adminEmails.includes(email) || isAdmin;
      
      await prisma.user.create({
        data: {
          email,
          password: await bcrypt.hash(password, 10),
          role: shouldBeAdmin ? 'ADMIN' : 'USER',
        },
      });
      
      sendJson(res, 201, { message: 'User created successfully', isAdmin: shouldBeAdmin });
    } catch (error) {
      handleError(res, error, 'Error creating user');
    }
  },
  
  login: async (req, res) => {
    try {
      const { email, password } = await parseBody(req);
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (user && await bcrypt.compare(password, user.password)) {
        const shouldBeAdmin = adminEmails.includes(email) || user.role === 'ADMIN';
        
        if (shouldBeAdmin && user.role !== 'ADMIN') {
          await prisma.user.update({ where: { id: user.id }, data: { role: 'ADMIN' } });
        }
        
        sendJson(res, 200, { 
          token: jwt.sign(
            { id: user.id, email: user.email, role: shouldBeAdmin ? 'ADMIN' : user.role },
            JWT_SECRET, { expiresIn: '24h' }
          ),
          user: { email: user.email, role: shouldBeAdmin ? 'ADMIN' : user.role }
        });
      } else {
        sendJson(res, 400, { error: 'Invalid credentials' });
      }
    } catch (error) {
      handleError(res, error, 'Login error');
    }
  },
  
  forgotPassword: async (req, res) => {
    try {
      const { email } = await parseBody(req);
      const user = await prisma.user.findUnique({ where: { email } });
      
      // For security reasons, don't reveal if the user exists or not
      if (!user) {
        console.log(`Password reset requested for non-existent email: ${email}`);
        return sendJson(res, 200, { 
          message: 'If an account with that email exists, we have sent password reset instructions.' 
        });
      }
      
      // Generate a reset token
      const resetToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
      
      // Store the token and expiry in the database
      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetToken,
          resetTokenExpiry: new Date(Date.now() + 3600000) // 1 hour from now
        }
      });
      
      // Create the reset URL - use your actual frontend URL
      const resetUrl = `https://pixl-exam.vercel.app/reset-password?token=${resetToken}`;
      
      // Send the email
      const mailOptions = {
        from: 'michaelegenamba@gmail.com',
        to: email,
        subject: 'Password Reset for Pixl',
        html: `
          <h1>Password Reset</h1>
          <p>You requested a password reset for your Pixl account.</p>
          <p>Click the link below to reset your password:</p>
          <a href="${resetUrl}">Reset Password</a>
          <p>This link will expire in 1 hour.</p>
          <p>If you didn't request this, please ignore this email.</p>
        `
      };
      
      // Send the email and wait for it to complete
      await transporter.sendMail(mailOptions);
      
      sendJson(res, 200, { 
        message: 'If an account with that email exists, we have sent password reset instructions.' 
      });
    } catch (error) {
      console.error('Email sending error:', error);
      handleError(res, error, 'Password reset error');
    }
  },
  
  resetPassword: async (req, res) => {
    try {
      const { resetToken, newPassword } = await parseBody(req);
      
      // Verify the token
      let userId;
      try {
        const decoded = jwt.verify(resetToken, JWT_SECRET);
        userId = decoded.userId;
      } catch (error) {
        return sendJson(res, 400, { error: 'Invalid or expired token' });
      }
      
      // Find the user with this token
      const user = await prisma.user.findFirst({
        where: {
          id: userId,
          resetToken,
          resetTokenExpiry: {
            gt: new Date()
          }
        }
      });
      
      if (!user) {
        return sendJson(res, 400, { error: 'Invalid or expired token' });
      }
      
      // Update the password and clear the reset token
      await prisma.user.update({
        where: { id: userId },
        data: {
          password: await bcrypt.hash(newPassword, 10),
          resetToken: null,
          resetTokenExpiry: null
        }
      });
      
      sendJson(res, 200, { message: 'Password reset successful' });
    } catch (error) {
      if (error.name === 'JsonWebTokenError' || error.name === 'TokenExpiredError') {
        sendJson(res, 400, { error: 'Invalid or expired token' });
      } else {
        handleError(res, error, 'Password reset error');
      }
    }
  }
};

// Event handlers
const events = {
  getAll: async (req, res) => {
    authenticateToken(req, res, async () => {
      try {
        const events = await prisma.event.findMany({
          include: { attendees: true, user: true },
          orderBy: { date: 'asc' }
        });
        
        sendJson(res, 200, events.map(event => ({
          ...event,
          attendees: event.attendees.map(a => a.userId),
          attendeeCount: event.attendees.length,
          user: event.user ? { id: event.user.id, email: event.user.email, role: event.user.role } : null
        })));
      } catch (error) {
        handleError(res, error, 'Error fetching events');
      }
    });
  },
  
  create: async (req, res) => {
    authenticateToken(req, res, async () => {
      try {
        const { title, description, date, location, price } = await parseBody(req);
        
        if (!title || !description || !date || !location)
          return sendJson(res, 400, { error: 'Missing required fields' });
        
        const eventDate = new Date(date);
        if (isNaN(eventDate.getTime()))
          return sendJson(res, 400, { error: 'Invalid date format' });
        
        const priceValue = price !== undefined && price !== '' ? parseFloat(price) : null;
        
        sendJson(res, 201, await prisma.event.create({
          data: { title, description, date: eventDate, location, price: priceValue, userId: req.user.id }
        }));
      } catch (error) {
        handleError(res, error, 'Error creating event');
      }
    });
  },
  
  update: async (req, res, id) => {
    authenticateToken(req, res, async () => {
      try {
        if (req.user.role !== 'ADMIN')
          return sendJson(res, 403, { error: 'Only admins can update events' });
        
        const { title, description, date, location, price } = await parseBody(req);
        const priceValue = price !== undefined && price !== '' ? parseFloat(price) : null;
        
        sendJson(res, 200, await prisma.event.update({
          where: { id },
          data: { title, description, date: new Date(date), location, price: priceValue }
        }));
      } catch (error) {
        handleError(res, error, 'Error updating event');
      }
    });
  },
  
  delete: async (req, res, id) => {
    authenticateToken(req, res, async () => {
      try {
        if (req.user.role !== 'ADMIN')
          return sendJson(res, 403, { error: 'Only admins can delete events' });
        
        await prisma.event.delete({ where: { id } });
        sendJson(res, 200, { message: 'Event deleted successfully' });
      } catch (error) {
        handleError(res, error, 'Error deleting event');
      }
    });
  },
  
  rsvp: async (req, res, id) => {
    authenticateToken(req, res, async () => {
      try {
        const userId = req.user.id;
        const { attending } = await parseBody(req);
        
        if (attending === undefined) 
          return sendJson(res, 400, { error: "Missing required fields" });
        
        if (attending) {
          await prisma.eventAttendee.upsert({
            where: { userId_eventId: { userId, eventId: id } },
            update: {},
            create: { userId, eventId: id }
          });
        } else {
          await prisma.eventAttendee.deleteMany({ where: { userId, eventId: id } });
        }
        
        const event = await prisma.event.findUnique({
          where: { id },
          include: { attendees: true }
        });
        
        sendJson(res, 200, {
          ...event,
          attendees: event.attendees.map(a => a.userId),
          attendeeCount: event.attendees.length
        });
      } catch (error) {
        handleError(res, error, 'Error updating RSVP');
      }
    });
  },
  
  payment: async (req, res, id) => {
    authenticateToken(req, res, async () => {
      try {
        const userId = req.user.id;
        const { paymentMethod } = await parseBody(req);
        
        if (!paymentMethod) return sendJson(res, 400, { error: "Missing payment method" });
        
        const event = await prisma.event.findUnique({ where: { id } });
        if (!event) return sendJson(res, 404, { error: 'Event not found' });

        const amount = event.price || 10.00;
        const payment = await prisma.payment.create({
          data: { userId, eventId: id, amount, status: 'COMPLETED', paymentMethod }
        });
        
        await prisma.eventAttendee.upsert({
          where: { userId_eventId: { userId, eventId: id } },
          update: { hasPaid: true },
          create: { userId, eventId: id, hasPaid: true }
        });
        
        sendJson(res, 200, { 
          success: true, 
          payment: { id: payment.id, status: payment.status, amount: payment.amount }
        });
      } catch (error) {
        handleError(res, error, 'Error processing payment');
      }
    });
  },
  
  getById: async (req, res, id) => {
    authenticateToken(req, res, async () => {
      try {
        const event = await prisma.event.findUnique({
          where: { id },
          include: { attendees: true, user: true }
        });
        
        if (!event) {
          return sendJson(res, 404, { error: 'Event not found' });
        }
        
        sendJson(res, 200, {
          ...event,
          attendees: event.attendees.map(a => a.userId),
          attendeeCount: event.attendees.length,
          user: event.user ? { id: event.user.id, email: event.user.email, role: event.user.role } : null
        });
      } catch (error) {
        handleError(res, error, 'Error fetching event');
      }
    });
  },
};

const handleSimplePayment = async (req, res) => {
  const match = req.url.match(/^\/events\/(\d+)\/simple-payment$/);
  if (!match || req.method !== 'POST') return false;
  
  authenticateToken(req, res, async () => {
    try {
      const eventId = parseInt(match[1]);
      const userId = req.user.id;
      
      const event = await prisma.event.findUnique({ where: { id: eventId } });
      if (!event) return sendJson(res, 404, { error: 'Event not found' });
      
      const amount = event.price || 10.00;
      const paymentId = `SIMPLE-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

      await prisma.paymentIntent.create({
        data: { userId, eventId, status: 'COMPLETED', paymentId, amount }
      });
      
      await prisma.eventAttendee.upsert({
        where: { userId_eventId: { userId, eventId } },
        update: { hasPaid: true },
        create: { userId, eventId, hasPaid: true }
      });
      
      sendJson(res, 200, { 
        success: true,
        message: 'Payment processed successfully',
        paymentId
      });
    } catch (error) {
      handleError(res, error, 'Failed to process payment');
    }
  });
  
  return true;
};

// Route handler
const handleRequest = async (req, res) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
  
  // Add CORS headers
  Object.keys(corsHeaders).forEach(header => res.setHeader(header, corsHeaders[header]));

  // Auth routes
  if (req.method === 'POST') {
    if (req.url === '/register') return auth.register(req, res);
    if (req.url === '/login') return auth.login(req, res);
    if (req.url === '/forgot-password') return auth.forgotPassword(req, res);
    if (req.url === '/reset-password') return auth.resetPassword(req, res);
  }
  
   // Root path handler
   if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain', ...corsHeaders });
    res.end('Pixl API is running!');
    return;
  }

  // Event routes
  if (req.url === '/events') {
    if (req.method === 'GET') return events.getAll(req, res);
    if (req.method === 'POST') return events.create(req, res);
  }
  
  // Event by ID routes
  const eventIdMatch = req.url.match(/^\/events\/(\d+)$/);
  if (eventIdMatch) {
    const id = parseInt(eventIdMatch[1]);
    if (req.method === 'GET') return events.getById(req, res, id);
    if (req.method === 'PUT') return events.update(req, res, id);
    if (req.method === 'DELETE') return events.delete(req, res, id);
  }
  
  // RSVP routes
  const rsvpMatch = req.url.match(/^\/events\/(\d+)\/rsvp$/);
  if (rsvpMatch && req.method === 'POST') {
    return events.rsvp(req, res, parseInt(rsvpMatch[1]));
  }
  
  // Payment routes
  const paymentMatch = req.url.match(/^\/events\/(\d+)\/payment$/);
  if (paymentMatch && req.method === 'POST') {
    return events.payment(req, res, parseInt(paymentMatch[1]));
  }
  
  // Simple Payment route
  if (await handleSimplePayment(req, res)) return;

  // 404 for unmatched routes
  sendJson(res, 404, { error: 'Not found' });
};

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', 'https://pixl-exam.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }
  
  // Route requests to appropriate handlers
  if (req.url.startsWith('/process-payment') || req.url.startsWith('/payment-confirmation/')) {
    await handlePayments(req, res);
  } else {
    // Handle other routes
    await handleRequest(req, res);
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await prisma.$disconnect();
  process.exit(0);
});

