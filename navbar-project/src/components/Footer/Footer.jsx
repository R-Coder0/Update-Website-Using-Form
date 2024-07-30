import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section company-description">
          <h2>Queen of Bee</h2>
          <p>We are passionate about bees and committed to providing the best services and products for beekeeping enthusiasts. Our mission is to promote sustainable beekeeping practices and support the bee community.</p>
        </div>
        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: <a href="mailto:info@queenofbee.com">info@queenofbee.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+123-456-7890</a></li>
            <li>Address: 123 Bee Street, Beeville, BE 12345</li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Queen of Bee. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
