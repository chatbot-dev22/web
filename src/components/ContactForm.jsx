import React from "react";
import "/src/assets/styles/ContactForm.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactForm = () => {
  return (
    <section className="contact-container">
      <div className="contact-box">
        <h2>GET IN TOUCH</h2>
        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <p>
              <FaPhoneAlt className="icon" /> +91 12345678
            </p>
            <p>
              <FaEnvelope className="icon" /> info@w.com
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Enter your name" required />
              <input type="email" placeholder="Enter your email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Enter your phone number" />
              <input type="text" placeholder="Enter your address" />
            </div>
            <input type="text" placeholder="Type the subject" />
            <textarea placeholder="Type your message here..."></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
