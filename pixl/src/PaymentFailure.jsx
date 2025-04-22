import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './index.css';

const PaymentFailure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const errorMessage = searchParams.get('error') || 'An error occurred during payment processing.';

  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Payment Failed</h2>
        <p className="error-message">{errorMessage}</p>
        <p>Please try again or contact support if the problem persists.</p>
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

export default PaymentFailure;