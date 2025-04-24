// Add this to your imports
import { useState } from 'react';
import { API_URL } from './config';

function Login() {
  // Add these state variables
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Update your handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      console.log('Attempting to login with API URL:', API_URL);
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      
      console.log('Login response status:', response.status);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }
      
      const data = await response.json();
      console.log('Login successful:', data);
      
      // Store token and user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', data.user.email);
      localStorage.setItem('userRole', data.user.role);
      localStorage.setItem('userId', data.user.id);
      
      // Also mark the backend as awake in session storage
      sessionStorage.setItem('backendAwake', 'true');
      
      // Navigate to events page
      navigate('/events');
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  
  // Add loading and error indicators to your JSX
  return (
    <div className="login-container">
      {/* Your existing JSX */}
      
      {loading && <div className="loading-indicator">Logging in...</div>}
      {error && <div className="error-message">{error}</div>}
      
      {/* Rest of your JSX */}
    </div>
  );
}