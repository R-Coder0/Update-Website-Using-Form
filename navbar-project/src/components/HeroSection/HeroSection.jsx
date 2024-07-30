import React, { useEffect, useState } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './HeroSection.css';
import axios from 'axios';
import defaultHero from '../../assets/hero.jpg'; // Ensure you have a default hero image in your assets

const HeroSection = () => {
  const [heroImage, setHeroImage] = useState(defaultHero);

  useEffect(() => {
    const fetchHeroImage = async () => {
      try {
        const response = await axios.get('http://localhost:5000/uploads/hero.jpg', { responseType: 'blob' });
        setHeroImage(URL.createObjectURL(response.data));
      } catch (error) {
        console.error('Error fetching the hero image, using default hero image', error);
      }
    };

    fetchHeroImage();
  }, []);

  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1 className="hero-title">
          <Typewriter
            words={['Welcome to Queen of Bee', 'Your Ultimate Source for Beekeeping']}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className="hero-subtitle">Empowering beekeepers, one hive at a time.</p>
        <button className="hero-button">Learn More</button>
      </div>
    </div>
  );
};

export default HeroSection;
