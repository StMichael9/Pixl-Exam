import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginSignup from './LoginSignup';
import Events from './Events';
import { API_URL } from './config';

import Payment from "./Payment";
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import SquarePayment from './SquarePayment';
import PaymentSuccess from './PaymentSuccess';

function App() {
  // Check if user is authenticated
  const isAuthenticated = () => {
    return localStorage.getItem('token') !== null;
  };

  // Protected route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated()) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginSignup />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route 
            path="/events" 
            element={
              <ProtectedRoute>
                <Events />
              </ProtectedRoute>
            } 
          />
          <Route path="/events/:id/payment" element={<SquarePayment />} />
          <Route path="/payment-success/:eventId" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<Payment />} />
          <Route path="/payment-pending" element={<Payment />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;