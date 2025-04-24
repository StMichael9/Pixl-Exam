import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';
import { API_URL } from './config';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams.get('transactionId');
  const eventId = searchParams.get('eventId');

  // Add effect to check if user came from a payment flow
  useEffect(() => {
    // If there's no transaction ID, they might have navigated here directly
    if (!transactionId) {
      console.log('No transaction ID found, user may have navigated directly to success page');
    }
    
    // Optional: You could fetch the event details here if you want to show event info
    if (eventId) {
      console.log('Event ID from payment:', eventId);
    }
  }, [transactionId, eventId]);

  return (
    <div className="payment-page">
      <div className="payment-success">
        <div className="success-icon">✓</div>
        <h2>Payment Successful!</h2>
        <p>Thank you for your payment. Your transaction has been completed successfully.</p>
        {transactionId && <p><strong>Transaction ID:</strong> {transactionId}</p>}
        <p>You will receive a confirmation email shortly.</p>
        <button 
          className="payment-button" 
          onClick={() => navigate('/events')}
        >
          Return to Events
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;