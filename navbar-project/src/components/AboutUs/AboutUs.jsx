import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import axios from 'axios';
import defaultAbout from '../../assets/hero.jpg'; // Ensure you have a default About Us image in your assets

const AboutUs = () => {
  const [aboutImage, setAboutImage] = useState(defaultAbout);

  useEffect(() => {
    const fetchAboutImage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/uploads/about.jpg', { responseType: 'blob' });
        setAboutImage(URL.createObjectURL(response.data));
      } catch (error) {
        console.error('Error fetching the About Us image, using default image', error);
      }
    };

    fetchAboutImage();
  }, []);

  return (
    <div className="about-us">
      <div className="about-us-container">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            At Queen of Bee, we are passionate about bees and dedicated to promoting sustainable beekeeping practices. Our mission is to support the bee community through innovative services and high-quality products designed for beekeeping enthusiasts.
          </p>
          <p>
            We believe in the importance of bees for the environment and work tirelessly to ensure their health and prosperity. Join us in our journey to create a better world for bees and future generations.
          </p>
        </div>
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
