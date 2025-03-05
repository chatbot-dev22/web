import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import "../assets/styles/LastDetails.css"; // Add this CSS file for styling

const LastDetails = () => {
  return (
    <footer className="last-details">
      <div className="footer-content">
        {/* Left Section - Logo */}
        <div className="footer-logo">
          <img src="/images/logo.jpg" alt="Miimansa Logo" className="logo" />
        </div>

        {/* Middle Section - Social Links */}
        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" /> LinkedIn
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" /> Twitter
          </a>
        </div>

        {/* Right Section - Links */}
        <div className="footer-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li>
              <a href="/what-we-do">What we do</a>
              <ul>
                <li><a href="/solutions">Solutions</a></li>
                <li><a href="/managed-services">Managed Services</a></li>
              </ul>
            </li>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>©  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default LastDetails;
