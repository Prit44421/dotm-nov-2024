import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
                <img src="logo.png" alt="Website Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#menu">Menu</a></li>
                <li><a href="#order">Order</a></li>
                <li><a href="#credits">Credits</a></li>
            </ul>
            <div className="sign-in">
                <button>Sign In</button>
            </div>
        </nav>
    );
}

export default Navbar;