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


// Function to check if user is logged in
export const isLoggedIn = () => {
    // Check for token in localStorage or sessionStorage
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    
    // Optional: You can add additional validation like checking token expiration
    if (token) {
        try {
            // If you're using JWT, you might want to decode and check expiration
            // This is a simple implementation
            return true;
        } catch (error) {
            // If token is invalid, remove it
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            return false;
        }
    }
    return false;
};

// Function to log out the user
export const logoutUser = async () => {
    try {
        // Optional: Call backend logout endpoint
        await fetch('http://localhost:3000/api/logout', {
            method: 'POST',
            credentials: 'include' // Important for cookies
        });

        // Remove token from storage
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');

        // Optional: Additional cleanup
        // You might want to clear other user-related data
    } catch (error) {
        console.error('Logout failed', error);
    }
};

// Function to set token after login
export const setToken = (token, rememberMe = false) => {
    if (rememberMe) {
        localStorage.setItem('token', token);
    } else {
        sessionStorage.setItem('token', token);
    }
};

// Function to get current token
export const getToken = () => {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
};