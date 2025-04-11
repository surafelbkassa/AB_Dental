import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials] = useState([
    {
      id: 1,
      name: "Natnael Demisse",
      text: "The best dental experience I've ever had! The staff was incredibly friendly and professional.",
      rating: 5
    },
    {
      id: 2,
      name: "Hasset Behailu",
      text: "I was nervous about my dental procedure, but the team made me feel completely at ease.",
      rating: 5
    },
    {
      id: 3,
      name: "Sara Wendu",
      text: "The modern facilities and expert care exceeded all my expectations. Highly recommended!",
      rating: 5
    }
  ]);

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Patients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="rating">
              {[...Array(testimonial.rating)].map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
            </div>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <p className="testimonial-author">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 