import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>If you have any questions or need more information, please reach out to us at:</p>
            <ul>
              <li>
                Email: <a href="mailto:info@queenofbee.com">info@queenofbee.com</a>
              </li>
              <li>
                Phone: <a href="tel:+1234567890">+123-456-7890</a>
              </li>
              <li>
                Address: <a href="https://www.google.com/maps?q=123+Bee+Street,+Beeville,+BE+12345" target="_blank" rel="noopener noreferrer">123 Bee Street, Beeville, BE 12345</a>
              </li>
            </ul>
          </div>
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contact-right">
          <h3>Our Location</h3>
          <iframe
            title="Queen of Bee Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094314!2d144.95373531531807!3d-37.81720997975157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f9f8d7%3A0xf5778aef192e2ae4!2sQueen%20Street%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1614257189742!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
