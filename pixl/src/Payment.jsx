import { useState, useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import './EventDetails.css';
import SquarePayment from './SquarePayment';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';

// Main Payment component that handles routing between different payment states
const Payment = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Determine which payment component to render based on the URL path
  if (path.includes('/payment-success')) {
    return <PaymentSuccess />;
  } else if (path.includes('/payment-failure')) {
    return <PaymentFailure />;
  } else {
    return <SquarePayment />;
  }
};

export default Payment;