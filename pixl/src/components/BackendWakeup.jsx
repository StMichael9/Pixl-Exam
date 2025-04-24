import { useState, useEffect } from 'react';
import { API_URL } from '../config';

function BackendWakeup() {
  const [status, setStatus] = useState('connecting');
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    const wakeupBackend = async () => {
      try {
        setStatus('connecting');
        console.log(`Attempting to wake up backend (attempt ${attempts + 1})...`);
        
        const response = await fetch(API_URL, { 
          method: 'GET',
          headers: { 'Content-Type': 'application/json' }
        });
        
        if (response.ok) {
          console.log('Backend is awake!');
          setStatus('connected');
          // Store in sessionStorage so we don't need to wake up again in this session
          sessionStorage.setItem('backendAwake', 'true');
        } else {
          throw new Error(`Server responded with status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error waking up backend:', error);
        setStatus('error');
        
        // Retry up to 3 times with increasing delays
        if (attempts < 3) {
          const delay = (attempts + 1) * 2000; // 2s, 4s, 6s
          console.log(`Retrying in ${delay/1000} seconds...`);
          setTimeout(() => {
            setAttempts(prev => prev + 1);
          }, delay);
        }
      }
    };

    // Only try to wake up if we haven't already in this session
    if (sessionStorage.getItem('backendAwake') !== 'true' && status !== 'connected') {
      wakeupBackend();
    } else if (sessionStorage.getItem('backendAwake') === 'true') {
      setStatus('connected');
    }
  }, [attempts]);

  if (status === 'connected' || sessionStorage.getItem('backendAwake') === 'true') {
    return null; // Don't render anything if connected
  }

  return (
    <div className="backend-wakeup-overlay">
      <div className="backend-wakeup-modal">
        <h2>Waking up server...</h2>
        <p>This may take up to 30 seconds on the first load.</p>
        <div className="loading-spinner"></div>
        {status === 'error' && attempts >= 3 && (
          <div className="error-message">
            <p>Having trouble connecting to the server.</p>
            <button onClick={() => setAttempts(0)}>Try Again</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BackendWakeup;