// api.js

const API_URL = 'http://192.158.81.51:3000/api'; // Replace with your actual API URL

// Function to register a new user
export const registerUser  = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Registration failed: ' + (await response.json()).message);
    }

    const data = await response.json();
    return data.token; // Return the token on successful registration
  } catch (error) {
    console.error('Error during registration:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to log in a user
export const loginUser  = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('Login failed: ' + (await response.json()).message);
    }

    const data = await response.json();
    return data.token; // Return the token on successful login
  } catch (error) {
    console.error('Error during login:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to check if the user is logged in
export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
};

// Function to log out the user
export const logoutUser  = () => {
  localStorage.removeItem('token'); // Remove the token from local storage
  // Optionally, you could also call a logout API endpoint if needed
};

// Function to set the token in local storage
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Function to get the token from local storage
export const getToken = () => {
  return localStorage.getItem('token');
};