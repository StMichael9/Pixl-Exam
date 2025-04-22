import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './SquarePayment.css';

const SquarePayment = () => {
  const [loading, setLoading] = useState(true);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [error, setError] = useState(null);
  const [event, setEvent] = useState(null);
  
  // Form state
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [zipCode, setZipCode] = useState('');
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Extract eventId from URL path
  const pathParts = location.pathname.split('/');
  const eventIdIndex = pathParts.indexOf('events') + 1;
  const eventId = pathParts[eventIdIndex] || null;
  
  // Fetch event details
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        if (!eventId) {
          setError('Event ID is missing. Please go back and try again.');
          setLoading(false);
          return;
        }
        
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/', { state: { message: 'Please log in to continue with payment' } });
          return;
        }
        
        const response = await fetch(`http://localhost:3001/events/${eventId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error(`Failed to fetch event details (Status: ${response.status})`);
        }
        
        const data = await response.json();
        setEvent(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching event:', err);
        setError(err.message || 'Failed to load event details');
        setLoading(false);
      }
    };
    
    fetchEvent();
  }, [eventId, navigate]);
  
  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };
  
  // Format expiry date (MM/YY)
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };
  
  // Handle form input changes
  const handleCardNumberChange = (e) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumber(formattedValue);
  };
  
  const handleExpiryDateChange = (e) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setExpiryDate(formattedValue);
  };
  
  // Process payment
  const handlePayment = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!cardNumber || !expiryDate || !cvv || !zipCode) {
      setError('Please fill in all card details');
      return;
    }
    
    if (cardNumber.replace(/\s+/g, '').length < 16) {
      setError('Please enter a valid card number');
      return;
    }
    
    if (expiryDate.length < 5) {
      setError('Please enter a valid expiry date (MM/YY)');
      return;
    }
    
    if (cvv.length < 3) {
      setError('Please enter a valid CVV');
      return;
    }
    
    setProcessingPayment(true);
    setError(null);
    
    try {
      const token = localStorage.getItem('token');
      
      // In a real implementation, you would tokenize the card details
      // Here we're using a simplified approach for the demo
      const response = await fetch(`http://localhost:3001/events/${eventId}/simple-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          // In a real implementation, you would not send raw card details
          // This is just for demonstration purposes
          paymentMethod: 'card',
          lastFour: cardNumber.slice(-4)
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        navigate(`/payment-success?eventId=${eventId}&transactionId=${data.paymentId || 'unknown'}`);
      } else {
        setError(data.error || data.message || 'Payment failed');
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Payment processing failed');
    } finally {
      setProcessingPayment(false);
    }
  };
  
  const handleCancel = () => {
    navigate('/events');
  };
  
  if (error) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <h2>Error</h2>
          <p className="error-message">{error}</p>
          <button className="payment-button" onClick={handleCancel}>Go Back to Events</button>
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="payment-page">
        <div className="payment-container">
          <h2>Loading Event Details</h2>
          <div className="loading-spinner"></div>
          <button className="cancel-btn" onClick={handleCancel} style={{ marginTop: '20px' }}>
            Cancel
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="payment-page">
      <div className="payment-container">
        <h2>Complete Your Payment</h2>
        
        <div className="event-details">
          <h3>{event.title}</h3>
          <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
          <p><strong>Price:</strong> ${event.price || '10.00'}</p>
        </div>
        
        <div className="payment-form-container">
          <form onSubmit={handlePayment} className="payment-form">
            <div className="form-group">
              <label htmlFor="card-number">Card Number</label>
              <input
                id="card-number"
                type="text"
                value={cardNumber}
                onChange={handleCardNumberChange}
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                autoComplete="cc-number"
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="expiry-date">Expiry Date</label>
                <input
                  id="expiry-date"
                  type="text"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                  maxLength="5"
                  autoComplete="cc-exp"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
                  placeholder="123"
                  maxLength="4"
                  autoComplete="cc-csc"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="zip-code">Zip Code</label>
              <input
                id="zip-code"
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                placeholder="12345"
                maxLength="5"
                autoComplete="postal-code"
              />
            </div>
            
            <div className="button-container">
              <button 
                type="button" 
                className="cancel-btn" 
                onClick={handleCancel}
                disabled={processingPayment}
              >
                Cancel
              </button>
              
              <button 
                type="submit" 
                className={`payment-submit-button ${processingPayment ? 'loading' : ''}`}
                disabled={processingPayment}
              >
                {processingPayment ? <span className="spinner"></span> : 'Pay Now'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SquarePayment;