import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p><FaPhone /> (123) 456-7890</p>
            <p><FaEnvelope /> info@abdental.com</p>
            <p><FaMapMarkerAlt /> 123 Dental Street, City, State 12345</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <div className="hours">
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 9:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} AB Dental. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 