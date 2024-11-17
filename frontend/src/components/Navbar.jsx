// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = ({ visible }) => {
    return (
        <nav className={`navbar ${visible ? 'fade-in' : 'fade-out'}`}>
            <div className="nav">
                <div className="logo">
                    Sugandhim
                </div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#order">Order</a></li>
                    <li><a href="#credits">Credits</a></li>
                </ul>
            </div>
            <div className="sign-in">
                <button>sign in</button>
            </div>
        </nav>
    );
}

export default Navbar;