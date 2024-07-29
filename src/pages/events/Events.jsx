// src/components/events/Events.jsx
import React from 'react';
import './Events.css'; // Import the CSS file

const Events = () => {
  return (
    <div className="events-container">
      <header className="events-header">
        <h1 className="events-title">Featured Events</h1>
      </header>
      <main className="events-main">

        <div className="event-card">
          <h2 className="event-title">Product Launch</h2>
        </div>

        <div className="event-card">
          <h2 className="event-title">Corporate Conference</h2>
        </div>

        <div className="event-card">
          <h2 className="event-title">Birthday Party</h2>
        </div>

        <div className="event-card">
          <h2 className="event-title">Annual General Meeting</h2>
        </div>

        <div className="event-card">
          <h2 className="event-title">Wedding Reception</h2>
        </div>

        <div className="event-card">
          <h2 className="event-title">School Graduation Ceremony</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Business Workshop</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Networking Event</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Music Concert</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Theater Performance</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Team Building Activity</h2>
        </div>
        <div className="event-card">
          <h2 className="event-title">Sports Banquet</h2>
        </div>
       
        {/* Add more events here */}
      </main>
    </div>
  );
};

export default Events;
