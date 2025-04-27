import jwt from 'jsonwebtoken';
import http from 'http';
import bcrypt from 'bcrypt';
import prisma from './prisma/client.js';
import handlePayments from './payments.js';
import nodemailer from 'nodemailer';

// Configuration
const JWT_SECRET = 'your-secret-key';
const PORT = process.env.PORT || 3001;
const FRONTEND_URL = 'https://pixl-exam.vercel.app';
const adminEmails = ['michaelegenamba@gmail.com', 'stmichaelegenamba@gmail.com'];
const corsHeaders = {
  'Access-Control-Allow-Origin': FRONTEND_URL,
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Email setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: 'michaelegenamba@gmail.com', pass: 'zisp nbdt llle yjec' }
});

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

const verifyAuth = (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return { error: 'Authentication required', code: 401 };
  
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    return { success: true };
  } catch (err) {
    return { error: 'Invalid or expired token', code: 403 };
  }
};

// Route handlers
const handlers = {
  // Auth routes
  '/register': async (req, res) => {
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
  
  '/login': async (req, res) => {
    try {
      const { email, password } = await parseBody(req);
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (user && await bcrypt.compare(password, user.password)) {
        const shouldBeAdmin = adminEmails.some(a => a.toLowerCase() === email.toLowerCase()) || user.role === 'ADMIN';
        
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
  
  '/forgot-password': async (req, res) => {
    try {
      const { email } = await parseBody(req);
      const user = await prisma.user.findUnique({ where: { email } });
      
      if (user) {
        const resetToken = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        await prisma.user.update({
          where: { id: user.id },
          data: { resetToken, resetTokenExpiry: new Date(Date.now() + 3600000) }
        });
        
        await transporter.sendMail({
          from: 'michaelegenamba@gmail.com',
          to: email,
          subject: 'Password Reset for Pixl',
          html: `<h1>Password Reset</h1><p>Click to reset: <a href="${FRONTEND_URL}/reset-password?token=${resetToken}">Reset Password</a></p>`
        });
      }
      
      sendJson(res, 200, { message: 'If an account with that email exists, we have sent password reset instructions.' });
    } catch (error) {
      handleError(res, error, 'Password reset error');
    }
  },
  
  '/reset-password': async (req, res) => {
    try {
      const { resetToken, newPassword } = await parseBody(req);
      let userId;
      
      try {
        userId = jwt.verify(resetToken, JWT_SECRET).userId;
      } catch {
        return sendJson(res, 400, { error: 'Invalid or expired token' });
      }
      
      const user = await prisma.user.findFirst({
        where: { id: userId, resetToken, resetTokenExpiry: { gt: new Date() } }
      });
      
      if (!user) return sendJson(res, 400, { error: 'Invalid or expired token' });
      
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
      handleError(res, error, 'Password reset error');
    }
  },
  
  // Event routes
  '/events': async (req, res) => {
    if (req.method === 'GET') {
      const auth = verifyAuth(req, res);
      if (auth.error) return sendJson(res, auth.code, { error: auth.error });
      
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
    } else if (req.method === 'POST') {
      const auth = verifyAuth(req, res);
      if (auth.error) return sendJson(res, auth.code, { error: auth.error });
      
      try {
        const { title, description, date, location, price } = await parseBody(req);
        
        if (!title || !description || !date || !location)
          return sendJson(res, 400, { error: 'Missing required fields' });
        
        const eventDate = new Date(date);
        if (isNaN(eventDate.getTime()))
          return sendJson(res, 400, { error: 'Invalid date format' });
        
        sendJson(res, 201, await prisma.event.create({
          data: { 
            title, description, date: eventDate, location, 
            price: price !== undefined && price !== '' ? parseFloat(price) : null, 
            userId: req.user.id 
          }
        }));
      } catch (error) {
        handleError(res, error, 'Error creating event');
      }
    }
  }
};

// Main request handler
const handleRequest = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, corsHeaders);
    res.end();
    return;
  }
  
  // Add CORS headers to all responses
  Object.keys(corsHeaders).forEach(header => res.setHeader(header, corsHeaders[header]));

  // Root path handler
  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain', ...corsHeaders });
    res.end('Pixl API is running!');
    return;
  }

  // Direct route handlers
  if (handlers[req.url] && (req.method === 'POST' || req.url === '/events' && req.method === 'GET')) {
    return handlers[req.url](req, res);
  }
  
  // Event by ID routes
  const eventIdMatch = req.url.match(/^\/events\/(\d+)$/);
  if (eventIdMatch) {
    const id = parseInt(eventIdMatch[1]);
    const auth = verifyAuth(req, res);
    if (auth.error) return sendJson(res, auth.code, { error: auth.error });
    
    try {
      if (req.method === 'GET') {
        const event = await prisma.event.findUnique({
          where: { id },
          include: { attendees: true, user: true }
        });
        
        if (!event) return sendJson(res, 404, { error: 'Event not found' });
        
        sendJson(res, 200, {
          ...event,
          attendees: event.attendees.map(a => a.userId),
          attendeeCount: event.attendees.length,
          user: event.user ? { id: event.user.id, email: event.user.email, role: event.user.role } : null
        });
      } else if (req.method === 'PUT') {
        if (req.user.role !== 'ADMIN')
          return sendJson(res, 403, { error: 'Only admins can update events' });
        
        const { title, description, date, location, price } = await parseBody(req);
        
        sendJson(res, 200, await prisma.event.update({
          where: { id },
          data: { 
            title, description, date: new Date(date), location, 
            price: price !== undefined && price !== '' ? parseFloat(price) : null 
          }
        }));
      } else if (req.method === 'DELETE') {
        if (req.user.role !== 'ADMIN')
          return sendJson(res, 403, { error: 'Only admins can delete events' });
        
        await prisma.event.delete({ where: { id } });
        sendJson(res, 200, { message: 'Event deleted successfully' });
      }
    } catch (error) {
      handleError(res, error, 'Error processing event');
    }
    return;
  }
  
  // RSVP route
  const rsvpMatch = req.url.match(/^\/events\/(\d+)\/rsvp$/);
  if (rsvpMatch && req.method === 'POST') {
    const id = parseInt(rsvpMatch[1]);
    const auth = verifyAuth(req, res);
    if (auth.error) return sendJson(res, auth.code, { error: auth.error });
    
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
    return;
  }
  
  // Payment route
  const paymentMatch = req.url.match(/^\/events\/(\d+)\/payment$/);
  if (paymentMatch && req.method === 'POST') {
    const id = parseInt(paymentMatch[1]);
    const auth = verifyAuth(req, res);
    if (auth.error) return sendJson(res, auth.code, { error: auth.error });
    
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
    return;
  }
  
  // Simple payment route
  const simplePaymentMatch = req.url.match(/^\/events\/(\d+)\/simple-payment$/);
  if (simplePaymentMatch && req.method === 'POST') {
    const eventId = parseInt(simplePaymentMatch[1]);
    const auth = verifyAuth(req, res);
    if (auth.error) return sendJson(res, auth.code, { error: auth.error });
    
    try {
      const userId = req.user.id;
      const event = await prisma.event.findUnique({ where: { id: eventId } });
      if (!event)

