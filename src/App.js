import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <main className="main-content">
        <section id="home" className="home-section">
          <div className="welcome-message">
            <h2>Welcome to AB Dental</h2>
            <p>Your trusted partner in dental care. We provide comprehensive dental services in a comfortable and modern environment.</p>
          </div>
        </section>

        <section id="services" className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <img src="/images/cleaning.jpg" alt="Dental Cleaning" />
              <h3>Dental Cleaning</h3>
              <p>Professional cleaning services to maintain your oral health.</p>
            </div>
            <div className="service-card">
              <img src="/images/whitening.jpg" alt="Teeth Whitening" />
              <h3>Teeth Whitening</h3>
              <p>Brighten your smile with our professional whitening treatments.</p>
            </div>
            <div className="service-card">
              <img src="/images/orthodontics.jpg" alt="Orthodontics" />
              <h3>Orthodontics</h3>
              <p>Comprehensive orthodontic care for all ages.</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <p>At AB Dental, we are committed to providing exceptional dental care using the latest technology and techniques. Our experienced team of dental professionals is dedicated to ensuring your comfort and satisfaction.</p>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <p>Ready to schedule your appointment? Contact us today!</p>
            <div className="contact-info">
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@abdental.com</p>
              <p>Address: 123 Dental Street, City, State 12345</p>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App; 