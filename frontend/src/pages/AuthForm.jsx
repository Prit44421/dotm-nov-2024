// src/pages/AuthForm.jsx
import './AuthForm.css'; // Import the CSS file for styling
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/login',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
      navigate('/menu'); // Redirect to the menu page on successful login
    } catch (error) {
      console.error('Login error:', error.response.data.message);
      alert('Login failed.');
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/api/register',
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
      alert(response.data.message);
      navigate('/menu'); // Uncomment this if you want to redirect after registration as well
    } catch (error) {
      console.error('Registration error:', error.response.data.message);
      alert('Registration failed.');
    }
  };

  return (
    <div className="auth-form"> {/* Apply the auth-form class here */}
      <h1>{isLogin ? 'Login' : 'Register'}</h1>
      <form onSubmit={isLogin ? handleLogin : handleRegister}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
      </form>
      <button onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Register' : 'Login'}
      </button>
    </div>
  );
};

export default AuthForm;