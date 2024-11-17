// src/App.jsx
import React, { useState, useEffect } from 'react';
import LandingAnimation from './components/LandingAnimation';
import Navbar from './components/Navbar';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300); // Change this duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LandingAnimation loading={loading} />
      <Navbar visible={!loading} />
      <div className='Main-title'>
        <div className="name">SUGANDHIM</div>
        <div className="quote">We care for your diet</div>
      </div>
    </>
  );
}

export default App;