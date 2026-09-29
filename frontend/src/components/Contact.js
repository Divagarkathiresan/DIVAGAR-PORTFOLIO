import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { useScrollAnimation } from '../utils/scrollAnimation';
import './Contact.css';

const RECIPIENT_EMAIL = 'divagar656@gmail.com';

const Contact = () => {
  
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll from-bottom">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and development. I typically reply 
              within 24 hours via email.
            </p>
            <p>
              <strong>Currently open to full-time opportunities & freelance projects in Full Stack Development.</strong>
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${RECIPIENT_EMAIL}`}>{RECIPIENT_EMAIL}</a>
                </div>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <span>Salem, India</span>
                </div>
              </div>
            </div>
          </div>
          <aside className="contact-cta animate-on-scroll from-right" aria-label="Contact options">
            <h3>Send a Message</h3>
            <p>
              The quickest way to reach me is by email. I typically reply within 24 hours.
            </p>
            <a
              className="btn"
              href={`mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent('Portfolio enquiry')}`}
            >
              Email Me
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Contact;
