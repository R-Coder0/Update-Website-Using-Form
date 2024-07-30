import React from 'react';
import Navbar from './components/NavBar/Navbar.jsx';
import defaultLogo from './assets/logo.png'; // Default logo image
import Hero from './components/HeroSection/HeroSection.jsx';
import Services from './components/Services/Services.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div>
      <Navbar logo={defaultLogo} />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <AboutUs />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
