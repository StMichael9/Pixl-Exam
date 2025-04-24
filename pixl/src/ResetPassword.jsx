import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './LoginSignup.css';
import { API_URL } from './config';

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const [resetToken, setResetToken] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetComplete, setResetComplete] = useState(false);
  const [tokenValid, setTokenValid] = useState(false);

  useEffect(() => {
    // Extract token from URL query parameters
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      setResetToken(token);
      setTokenValid(true);
    } else {
      setError('Reset token is missing. Please use the link from your email.');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('http://localhost:3001/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ resetToken, newPassword: password }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setMessage('Your password has been reset successfully.');
      setResetComplete(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="header"></div>
      <div className="text">Reset Password</div>
      <div className="underline"></div>
      
      {error && <div className="error-message">{error}</div>}
      {resetComplete && <div className="success-message">Your password has been reset successfully!</div>}
      
      {tokenValid && !resetComplete ? (
        <form onSubmit={handleSubmit} className="inputs">
          <div className="input">
            <input 
              type="password" 
              placeholder="New Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input">
            <input 
              type="password" 
              placeholder="Confirm New Password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="submit-button-container">
            <button type="submit" className="submit" disabled={loading}>
              {loading ? "Processing..." : "Reset Password"}
            </button>
          </div>
        </form>
      ) : null}
      
      <div className="forgot-password">
        <span onClick={() => navigate('/')}>Back to Login</span>
      </div>
      
      {!resetComplete && !tokenValid && (
        <div className="sumbit-container">
          <div 
            className="sumbit gray"
            onClick={() => navigate('/')}
          >
            Back to Login
          </div>
        </div>
      )}
    </div>
  );
}

export default ResetPassword;