import React, { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import axios from 'axios';
import './NavBar.css';
import defaultLogo from '../../assets/logo.png'; // Ensure you have a default logo image in your assets

const Navbar = ({ logo }) => {
  const [logoImage, setLogoImage] = useState(defaultLogo);

  useEffect(() => {
    const fetchLogo = async () => {
      try {
        const response = await axios.get('http://172.16.2.70:5000/uploads/logo.png', { responseType: 'blob' });
        setLogoImage(URL.createObjectURL(response.data));
      } catch (error) {
        console.error('Error fetching the logo, using default logo', error);
      }
    };

    fetchLogo();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  // Close the mobile menu on page load or refresh
  useEffect(() => {
    const closeMenuOnRefresh = () => {
      setIsOpen(false);
    };
    closeMenuOnRefresh();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
          {logoImage && <img src={logoImage} alt="Queen of Bee Logo" className="logo-image" />}
        </ScrollLink>
      </div>

      <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>Home</ScrollLink></li>
        <li><ScrollLink to="services" smooth={true} duration={500} onClick={closeMenu}>Services</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About Us</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</ScrollLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
