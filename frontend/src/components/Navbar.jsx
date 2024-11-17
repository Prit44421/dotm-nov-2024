// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Navbar.css';

const Navbar = ({ visible }) => {
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
                <button>Sign In</button>
            </div>
        </nav>
    );
}

export default Navbar;