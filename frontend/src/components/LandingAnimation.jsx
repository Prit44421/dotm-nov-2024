// src/components/LandingAnimation.jsx
import React, { useEffect, useState } from 'react';
import './LandingAnimation.css'; // Import the CSS file for animations

const LandingAnimation = ({ loading }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!loading) {
      // Start the animation by setting isAnimating to true
      setIsAnimating(true);
      
      // Set a timeout to remove the image after the animation duration
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 900); // Match this duration to your CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [loading]);

  return (
    <div className={`landing-animation ${isAnimating ? 'fly-out' : ''}`}>
      {isVisible && (
        <img 
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fjocyls.com%2Fwp-content%2Fuploads%2F2023%2F04%2Ffilipino-food-1024x683.png&f=1&nofb=1&ipt=65e5e54865aa37295a6fe383c304ff2bd1ffc48ca9abea7c18ffdcda15da26e1&ipo=images" 
          alt="Landing" 
        />
      )}
    </div>
  );
};

export default LandingAnimation;