import React from 'react';
import { FaTooth } from 'react-icons/fa';
import './Banner.css';

const Banner = () => {
  const handleAppointmentClick = () => {
    // You can replace this with your preferred appointment booking system
    window.location.href = 'tel:+1234567890'; // Example: Call the office
    // Alternative: window.open('https://your-booking-system.com', '_blank');
  };

  return (
    <header className="banner">
      <div className="banner-content">
        <div className="logo">
          <FaTooth className="logo-icon" />
          <h1>AB Dental</h1>
        </div>
        <nav className="main-nav">
          <ul>
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#services" className="nav-link">Services</a></li>
            <li><a href="#about" className="nav-link">About</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div className="hero-section">
        <h2>Your Smile, Our Priority</h2>
        <p>Experience world-class dental care in a comfortable environment</p>
        <button className="cta-button" onClick={handleAppointmentClick}>
          Book an Appointment
        </button>
      </div>
    </header>
  );
};

export default Banner; 