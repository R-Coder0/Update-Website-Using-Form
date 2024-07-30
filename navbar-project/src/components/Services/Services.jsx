import React, { useEffect, useState } from 'react';
import './Services.css';
import axios from 'axios';
import defaultService1 from '../../assets/logo.png';
import defaultService2 from '../../assets/logo.png';
import defaultService3 from '../../assets/logo.png';

const Services = () => {
  const [serviceImages, setServiceImages] = useState({
    service1: defaultService1,
    service2: defaultService2,
    service3: defaultService3,
  });

  useEffect(() => {
    const fetchServiceImages = async () => {
      try {
        const responses = await Promise.all([
          axios.get('http://localhost:5000/uploads/service1.jpg', { responseType: 'blob' }),
          axios.get('http://localhost:5000/uploads/service2.jpg', { responseType: 'blob' }),
          axios.get('http://localhost:5000/uploads/service3.jpg', { responseType: 'blob' }),
        ]);

        setServiceImages({
          service1: URL.createObjectURL(responses[0].data),
          service2: URL.createObjectURL(responses[1].data),
          service3: URL.createObjectURL(responses[2].data),
        });
      } catch (error) {
        console.error('Error fetching service images, using default images', error);
      }
    };

    fetchServiceImages();
  }, []);

  return (
    <div className="services">
      <h2>Our Services</h2>
      <div className="service-list">
        <div className="service-item">
          <img src={serviceImages.service1} alt="Service 1" />
          <h3>Service One</h3>
          <p>Professional beekeeping and honey production services.</p>
        </div>
        <div className="service-item">
          <img src={serviceImages.service2} alt="Service 2" />
          <h3>Service Two</h3>
          <p>Advanced hive management and bee health monitoring.</p>
        </div>
        <div className="service-item">
          <img src={serviceImages.service3} alt="Service 3" />
          <h3>Service Three</h3>
          <p>Expert consultation and training for aspiring beekeepers.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
