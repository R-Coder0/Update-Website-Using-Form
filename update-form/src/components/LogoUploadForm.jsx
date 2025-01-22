import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LogoUploadForm.css';

const LogoUploadForm = () => {
  const [logo, setLogo] = useState(null);
  const [hero, setHero] = useState(null);
  const [service1, setService1] = useState(null);
  const [service2, setService2] = useState(null);
  const [service3, setService3] = useState(null);
  const [about, setAbout] = useState(null);
  const { auth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleImageChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      alert('Please upload a valid image file.');
    }
  };

  const handleSubmit = async (event, type, image) => {
    event.preventDefault();
    if (!image) {
      alert('No image selected.');
      return;
    }

    const formData = new FormData();
    formData.append(type, image);

    try {
      await axios.post(`http://localhost:8000/upload-${type}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${auth}`
        },
      });
      alert(`${type} image uploaded successfully!`);
    } catch (error) {
      console.error(`Error uploading the ${type} image`, error);
      alert(`Error uploading the ${type} image`);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (!auth) {
    return <p>You need to log in to upload images.</p>;
  }

  return (
    <div className="form-container">
      <button className="logout-button" onClick={handleLogout}>Logout</button>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'logo', logo)}>
        <h2>Update Logo</h2>
        <label htmlFor="logo-upload">Upload New Logo</label>
        <input type="file" id="logo-upload" accept="image/*" onChange={(e) => handleImageChange(e, setLogo)} />
        {logo && <img src={URL.createObjectURL(logo)} alt="Selected Logo" />}
        <button type="submit">Submit</button>
      </form>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'hero', hero)}>
        <h2>Update Hero Image</h2>
        <label htmlFor="hero-upload">Upload New Hero Image</label>
        <input type="file" id="hero-upload" accept="image/*" onChange={(e) => handleImageChange(e, setHero)} />
        {hero && <img src={URL.createObjectURL(hero)} alt="Selected Hero" />}
        <button type="submit">Submit</button>
      </form>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'service1', service1)}>
        <h2>Update Service 1 Image</h2>
        <label htmlFor="service1-upload">Upload New Service 1 Image</label>
        <input type="file" id="service1-upload" accept="image/*" onChange={(e) => handleImageChange(e, setService1)} />
        {service1 && <img src={URL.createObjectURL(service1)} alt="Selected Service 1" />}
        <button type="submit">Submit</button>
      </form>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'service2', service2)}>
        <h2>Update Service 2 Image</h2>
        <label htmlFor="service2-upload">Upload New Service 2 Image</label>
        <input type="file" id="service2-upload" accept="image/*" onChange={(e) => handleImageChange(e, setService2)} />
        {service2 && <img src={URL.createObjectURL(service2)} alt="Selected Service 2" />}
        <button type="submit">Submit</button>
      </form>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'service3', service3)}>
        <h2>Update Service 3 Image</h2>
        <label htmlFor="service3-upload">Upload New Service 3 Image</label>
        <input type="file" id="service3-upload" accept="image/*" onChange={(e) => handleImageChange(e, setService3)} />
        {service3 && <img src={URL.createObjectURL(service3)} alt="Selected Service 3" />}
        <button type="submit">Submit</button>
      </form>
      <form className="upload-form" onSubmit={(e) => handleSubmit(e, 'about', about)}>
        <h2>Update About Us Image</h2>
        <label htmlFor="about-upload">Upload New About Us Image</label>
        <input type="file" id="about-upload" accept="image/*" onChange={(e) => handleImageChange(e, setAbout)} />
        {about && <img src={URL.createObjectURL(about)} alt="Selected About Us" />}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogoUploadForm;
