// src/components/LandingAnimation.jsx
import React, { useEffect, useState } from 'react';
import './LandingAnimation.css'; // Import the CSS file for animations
import LandingImage from '../assets/bg_light.png'

const LandingAnimation = ({ loading }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Start the animation by setting isAnimating to true
      setIsAnimating(true);
    }
  }, [loading]);

  return (
    <div className={`landing-animation ${isAnimating ? 'fly-out' : ''}`}>
        <img 
          src={LandingImage} 
          alt="Landing" 
        />
    </div>
  );
};

export default LandingAnimation;