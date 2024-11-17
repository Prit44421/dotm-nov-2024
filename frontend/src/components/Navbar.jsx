// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { isLoggedIn, logoutUser  } from '../api'; // Import API functions
import './Navbar.css';

const Navbar = ({ visible }) => {
    const handleLogout = () => {
        logoutUser (); // Call logout function
        window.location.reload(); // Reload the page or redirect as needed
    };

    return (
        <nav className={`navbar ${visible ? 'fade-in' : 'fade-out'}`}>
            <div className="nav">
                <div className="logo">Sugandhim</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    <li><Link to="/credits">Credits</Link></li>
                </ul>
            </div>
            <div className="sign-in">
                {isLoggedIn() ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/auth">
                        <button>Sign In</button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;