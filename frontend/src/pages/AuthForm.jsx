// src/pages/AuthForm.jsx
import React, { useState } from 'react';
import './AuthForm.css'; // Import the CSS file for styling
import { registerUser , loginUser , setToken } from '../api'; // Import API functions

const AuthForm = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      let token;
      if (isRegistering) {
        // Register the user
        token = await registerUser (email, password);
      } else {
        // Log in the user
        token = await loginUser (email, password);
      }
      setToken(token); // Store token after successful registration/login
      onAuthSuccess(token); // Call the onAuthSuccess function passed as props
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-form">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? 'Already have an account?' : "Don't have an account?"}
        <button onClick={() => setIsRegistering((prev) => !prev)}>
          {isRegistering ? 'Login' : 'Register'}
        </button>
      </p>
    </div>
  );
};

export default AuthForm;