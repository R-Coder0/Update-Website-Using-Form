import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import LogoUploadForm from './components/LogoUploadForm';
import Login from './components/Login';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<LogoUploadForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
