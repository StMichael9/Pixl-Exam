import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './Events.css';

// Event Card Component
const EventCard = ({ event, isAdmin, isUserAttending, handleRegister, handlePayment, handleEdit, handleDelete, loading, formatDate }) => {
  console.log('Rendering EventCard for event:', event.id, event.title);
  const attending = isUserAttending(event);
  
  return (
    <div className={`event-card ${attending ? 'registered-event' : ''}`}>
      <h2 className="event-title">{event.title}</h2>
      {attending && <div className="registered-badge">Registered</div>}
      <p className="event-description">{event.description}</p>
      <div className="event-details">
        <p><strong>Date:</strong> {formatDate(event.date)}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p><strong>Attendees:</strong> {event.attendeeCount || 0} people going</p>
        <p><strong>Price:</strong> ${event.price ? parseFloat(event.price).toFixed(2) : '0.00'}</p>
      </div>
      <div className="event-interaction">
        {attending ? (
          <button className="cancel-btn" onClick={() => handleRegister(event.id, false)} disabled={loading}>
            Unregister
          </button>
        ) : (
          event.price && parseFloat(event.price) > 0 ? (
            <button 
              className="payment-btn" 
              onClick={() => {
                console.log('Pay & Register clicked for event:', event.id);
                handlePayment(event.id);
              }} 
              disabled={loading}
            >
              Pay & Register
            </button>
          ) : (
            <button className="rsvp-btn" onClick={() => handleRegister(event.id, true)} disabled={loading}>
              Register
            </button>
          )
        )}
      </div>
      {isAdmin && (
        <div className="event-actions">
          <button className="edit-btn" onClick={() => handleEdit(event)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(event.id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

// Event Form Component
const EventForm = ({ eventForm, handleInputChange, handleSubmit, editingId, loading }) => (
  <div className="event-form-container">
    <h2>{editingId ? 'Edit Event' : 'Add New Event'}</h2>
    <form onSubmit={handleSubmit} className="event-form">
      {['title', 'description', 'date', 'location', 'price'].map(field => (
        <div className="form-group" key={field}>
          <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          {field === 'description' ? 
            <textarea id={field} name={field} value={eventForm[field]} onChange={handleInputChange} required /> :
            field === 'price' ?
            <input type="number" step="0.01" min="0" id={field} name={field} 
              value={eventForm[field]} onChange={handleInputChange} /> :
            <input type={field === 'date' ? 'date' : 'text'} id={field} name={field} 
              value={eventForm[field]} onChange={handleInputChange} required />
          }
        </div>
      ))}
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? 'Saving...' : (editingId ? 'Update Event' : 'Create Event')}
      </button>
    </form>
  </div>
);

function Events() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    addEvent: false, events: [], isAdmin: false, editingId: null, loading: true,
    eventForm: { title: '', description: '', date: '', location: '', price: '' },
    error: null, userId: null, message: null
  });
  
  const updateState = updates => setState(prev => ({ ...prev, ...updates }));
  const formatDate = dateString => new Date(dateString).toLocaleDateString(undefined, 
    { year: 'numeric', month: 'long', day: 'numeric' });
  const isUserAttending = event => {
    if (!state.userId || !event.attendees) return false;
    const userIdNum = parseInt(state.userId);
    return Array.isArray(event.attendees) && event.attendees.some(a => 
      (typeof a === 'object' && a.userId) ? a.userId === userIdNum : a === userIdNum);
  };
  const handleLogout = () => {
    ['token', 'user', 'userRole', 'userId'].forEach(item => localStorage.removeItem(item));
    navigate('/');
  };

  const fetchEvents = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) return navigate('/');
      const res = await fetch('http://localhost:3001/events', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (!res.ok) throw new Error('Failed to fetch events');
      const events = await res.json();
      console.log('Fetched events:', events); // Add this line to debug
      updateState({ events, loading: false });
    } catch (err) {
      updateState({ error: 'Failed to load events', loading: false });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    const processedValue = name === 'price' && value !== '' ? parseFloat(value) : value;
    
    updateState({ 
      eventForm: { ...state.eventForm, [name]: processedValue } 
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log('Submitting form data:', state.eventForm); // Log form data before submission
    updateState({ loading: true });
    try {
      const token = localStorage.getItem('token');
      const url = state.editingId ? `http://localhost:3001/events/${state.editingId}` : 'http://localhost:3001/events';
      const res = await fetch(url, {
        method: state.editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(state.eventForm)
      });
      if (!res.ok) throw new Error(`Failed to ${state.editingId ? 'update' : 'create'} event`);
      const eventData = await res.json();
      updateState({
        events: state.editingId ? state.events.map(event => event.id === state.editingId ? eventData : event)
          : [...state.events, eventData],
        eventForm: { title: '', description: '', date: '', location: '', price: '' },
        editingId: null, addEvent: false, loading: false
      });
    } catch (err) {
      updateState({ error: `Failed to ${state.editingId ? 'update' : 'create'} event`, loading: false });
    }
  };

  const handleEdit = event => updateState({
    eventForm: { ...event, date: new Date(event.date).toISOString().split('T')[0] },
    editingId: event.id, addEvent: true
  });

  const handleDelete = async id => {
    if (!window.confirm('Are you sure you want to delete this event?')) return;
    updateState({ loading: true });
    try {
      const res = await fetch(`http://localhost:3001/events/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      if (!res.ok) throw new Error('Failed to delete');
      updateState({ events: state.events.filter(event => event.id !== id), loading: false });
    } catch (err) {
      updateState({ error: 'Failed to delete event', loading: false });
    }
  };

  const handleRegister = async (eventId, attending) => {
    updateState({ loading: true });
    const userIdNum = parseInt(state.userId);
    // Update UI optimistically
    updateState({
      events: state.events.map(event => {
        if (event.id === eventId) {
          let newAttendees = [...(event.attendees || [])];
          attending ? !newAttendees.includes(userIdNum) && newAttendees.push(userIdNum)
            : newAttendees = newAttendees.filter(id => id !== userIdNum);
          return { ...event, attendees: newAttendees, attendeeCount: newAttendees.length };
        }
        return event;
      }),
      message: attending ? 'You are now registered for this event!' : 'You have cancelled your registration.'
    });
    setTimeout(() => updateState({ message: null }), 3000);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3001/events/${eventId}/rsvp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ attending })
      });
      if (!response.ok) throw new Error('Failed to update registration status');
      updateState({ loading: false });
    } catch (err) {
      updateState({ error: 'Failed to update registration. Please try again.', loading: false });
      fetchEvents(); // Revert the optimistic UI update
    }
  };

  const handlePaymentRedirect = (eventId) => {
    console.log('Redirecting to payment page for event ID:', eventId);
    if (!eventId) {
      console.error('Event ID is undefined');
      return;
    }
    navigate(`/events/${eventId}/payment`);
  };

  const handlePayment = (eventId) => {
    // Navigate to the payment page for this event
    navigate(`/events/${eventId}/payment`);
  };

  useEffect(() => {
    const checkTokenValidity = () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return navigate('/');
        const payload = JSON.parse(atob(token.split('.')[1]));
        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) handleLogout();
      } catch (err) { console.error('Token error:', err); }
    };

    updateState({
      isAdmin: localStorage.getItem('userRole') === 'ADMIN',
      userId: localStorage.getItem('userId')
    });
    fetchEvents();
    checkTokenValidity();
    
    // Check payment status
    const urlParams = new URLSearchParams(window.location.search);
    const status = urlParams.get('status');
    if (status) {
      window.history.replaceState({}, document.title, window.location.pathname);
      updateState({
        message: ['approved', 'success'].includes(status) ? 'Payment successful! You are now registered.' 
          : status === 'pending' ? 'Payment pending. You will be registered once confirmed.' : null,
        error: !['approved', 'success', 'pending'].includes(status) ? 'Payment was not completed.' : null
      });
      fetchEvents();
    }
  }, [navigate]);

  if (state.loading && state.events.length === 0) return <div className="loading">Loading events...</div>;

  return (
    <div className="events-container">
      <div className="events-header">
        <h1>Upcoming Events</h1>
        <div className="header-actions">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          {state.isAdmin && (
            <button className="add-event-btn" onClick={() => updateState({
              addEvent: !state.addEvent,
              eventForm: state.addEvent ? state.eventForm : { title: '', description: '', date: '', location: '', price: '' },
              editingId: state.addEvent ? null : state.editingId
            })}>
              {state.addEvent ? 'Cancel' : 'Add Event'}
            </button>
          )}
        </div>
      </div>
      
      {state.error && <div className="error-message">{state.error}</div>}
      {state.message && <div className="success-message">{state.message}</div>}
      
      {state.addEvent && <EventForm eventForm={state.eventForm} handleInputChange={handleInputChange}
        handleSubmit={handleSubmit} editingId={state.editingId} loading={state.loading} />}
      
      <div className="events-list">
        {state.events.length === 0 ? <div className="no-events">No events found.</div> :
          state.events.map(event => (
            <EventCard 
              key={event.id} 
              event={event} 
              isAdmin={state.isAdmin} 
              isUserAttending={isUserAttending}
              handleRegister={handleRegister} 
              handlePayment={handlePaymentRedirect} // Use this function
              handleEdit={handleEdit} 
              handleDelete={handleDelete}
              loading={state.loading} 
              formatDate={formatDate} 
            />
          ))
        }
      </div>
    </div>
  );
}

export default Events;