// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingAnimation from './components/LandingAnimation';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AuthForm from './pages/AuthForm'; // Ensure you have an AuthForm component
import Menu from './pages/Menu'; // Ensure you have a Menu component
import Order from './pages/Order'; // Ensure you have an Order component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Change this duration as needed

    return () => clearTimeout(timer);
  }, []);

  const handleAuthSuccess = () => {
    // Handle authentication success logic here
  };

  return (
    <Router>
      <LandingAnimation loading={loading} />
      <Navbar visible={!loading} />
      <Routes>
        {/* Default route to Home */}
        <Route path="/" element={<Home />} />

        {/* Other routes */}
        <Route path="/auth" element={<AuthForm onAuthSuccess={handleAuthSuccess} />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;