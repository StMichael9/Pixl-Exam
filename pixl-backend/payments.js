import { Router } from 'express';
import { randomUUID } from 'crypto';
import jwt from 'jsonwebtoken';
// Import Square as a CommonJS module in ESM
import pkg from 'square';
const { SquareClient } = pkg;
// Import the shared Prisma client instance
import prisma from './prisma/client.js';

const router = Router();
const JWT_SECRET = 'your-secret-key'; // Should match the one in server.js

// Initialize Square client with string values instead of enum constants
const squareClient = new SquareClient({
  environment: 'sandbox', // Use 'production' for production
  accessToken: process.env.SQUARE_ACCESS_TOKEN || 'your-square-access-token',
});

// Authentication middleware
const auth = async (req, res, next) => {
  try {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Unauthorized' });
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(401).json({ message: 'Unauthorized' });
      req.user = user;
      next();
    });
  } catch (error) {
    console.error('Auth error:', error);
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

router.post('/process-payment', auth, async (req, res) => {
  try {
    const { sourceId, eventId, amount, currency } = req.body;
    const userId = req.user.id;
    
    if (!sourceId || !eventId || !amount || !currency) {
      return res.status(400).json({ message: 'Missing required payment information' });
    }
    
    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { id: parseInt(eventId) }
    });
    
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    // Create payment with Square
    const payment = await squareClient.paymentsApi.createPayment({
      sourceId: sourceId,
      idempotencyKey: randomUUID(),
      amountMoney: {
        amount: Math.round(amount * 100), // Convert to cents
        currency: currency,
      },
      locationId: process.env.SQUARE_LOCATION_ID || 'your-location-id',
    });
    
    // Save payment information to database
    const paymentIntent = await prisma.paymentIntent.create({
      data: {
        userId: userId,
        eventId: parseInt(eventId),
        amount: parseFloat(amount),
        paymentId: payment.result.payment.id,
        status: 'completed',
      }
    });
    
    // Register user for the event
    await prisma.eventAttendee.upsert({
      where: { 
        userId_eventId: { 
          userId: userId, 
          eventId: parseInt(eventId) 
        } 
      },
      update: { hasPaid: true },
      create: { 
        userId: userId, 
        eventId: parseInt(eventId), 
        hasPaid: true 
      }
    });
    
    return res.status(200).json({
      success: true,
      transactionId: payment.result.payment.id
    });
  } catch (error) {
    console.error('Payment error:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Payment processing failed'
    });
  }
});

// Payment confirmation endpoint
router.get('/payment-confirmation/:eventId', auth, async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const userId = req.user.id;
    
    // Get the latest payment intent for this user and event
    const paymentIntent = await prisma.paymentIntent.findFirst({
      where: {
        userId: userId,
        eventId: parseInt(eventId),
        status: 'completed'
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    if (!paymentIntent) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    
    res.status(200).json({
      success: true,
      paymentId: paymentIntent.paymentId
    });
  } catch (error) {
    console.error('Confirmation error:', error);
    res.status(500).json({
      success: false,
      message: error.message || 'Failed to confirm payment'
    });
  }
});

export default router;