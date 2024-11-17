import LandingAnimation from './components/LandingAnimation';
import React, { useState, useEffect } from 'react';

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
    <LandingAnimation loading={loading} />
  );
}

export default App;