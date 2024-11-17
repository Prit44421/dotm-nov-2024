// src/App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingAnimation from './components/LandingAnimation';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Ensure you have a Home component
// import Menu from './pages/Menu'; // Create a Menu component
// import Order from './pages/Order'; // Create an Order component
// import Credits from './pages/Credits'; // Create a Credits component

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
    <Home/>
    <Router>
      <LandingAnimation loading={loading} />
      <Navbar visible={!loading} />
      <Routes>
        {/* <Route path="/menu" component={Menu} /> */}
        {/* <Route path="/order" component={Order} /> */}
        {/* <Route path="/credits" component={Credits} /> */}
        <Route path="/" component={Home} />
      </Routes>
    </Router>
    </>
  );
}

export default App;