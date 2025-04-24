import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Events from './Events';
import { API_URL } from './config';
import BackendWakeup from './components/BackendWakeup';

import Payment from "./Payment";
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import SquarePayment from './SquarePayment';
import PaymentSuccess from './PaymentSuccess';
import PaymentFailure from './PaymentFailure';

function App() {
  // Simple server wake-up ping
  useEffect(() => {
    const wakeupServer = async () => {
      try {
        console.log('Sending wake-up ping to server:', API_URL);
        await fetch(API_URL, { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        console.log('Server ping complete');
      } catch (error) {
        console.log('Server wake-up ping failed, server might be starting up:', error);
      }
    };

    wakeupServer();
  }, []);

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
    <>
      <BackendWakeup />
      <Router>
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
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
            <Route path="/payment-failure" element={<PaymentFailure />} />
            <Route path="/payment-pending" element={<Payment />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            {/* Redirect any unknown routes to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;