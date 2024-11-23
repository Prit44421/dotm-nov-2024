// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../api'; // Ensure these are imported correctly
import './Navbar.css';

const Navbar = ({ visible }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    // Check login status when component mounts and update state
    useEffect(() => {
        const checkLoginStatus = () => {
            const status = isLoggedIn();
            setLoggedIn(status);
        };

        checkLoginStatus();
    }, []);

    const handleLogout = () => {
        // Call logout function from api
        logoutUser();
        
        // Update login state
        setLoggedIn(false);
        
        // Redirect to home or login page
        navigate('/');
    };

    return (
        <nav className={`navbar ${visible ? 'fade-in' : 'fade-out'}`}>
            <div className="nav">
                <div className="logo">Sugandhim</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order">Order</Link></li>
                    {/* Only show Order link if logged in */}
                    {loggedIn && <li><Link to="/order">Order</Link></li>}
                </ul>
            </div>
            <div className="sign-in">
                {loggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/auth">
                        <button>{loggedIn ? 'sign up': 'sign out'}</button>
                    </Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;