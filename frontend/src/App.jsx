import React, { useState, useEffect } from 'react';
import LandingAnimation from './components/LandingAnimation';
import navbar from './components/Navbar';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change this duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <><LandingAnimation loading={loading} />
    <Navbar /></>
  );
}

export default App;