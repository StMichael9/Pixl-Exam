import auth from '../middleware/auth.js';

// Helper function to send API requests to your backend
const sendApiRequest = async (endpoint, method, data, token) => {
  try {
    const response = await fetch(`http://localhost:3001/api${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? `Bearer ${token}` : undefined
      },
      body: data ? JSON.stringify(data) : undefined
    });
    
    return await response.json();
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};

// Process payment function
export const processPayment = async (paymentData, token) => {
  return sendApiRequest('/payments/process-payment', 'POST', paymentData, token);
};

// Get payment confirmation
export const getPaymentConfirmation = async (eventId, token) => {
  return sendApiRequest(`/payments/payment-confirmation/${eventId}`, 'GET', null, token);
};

// Export other payment-related functions as needed
export default {
  processPayment,
  getPaymentConfirmation
};