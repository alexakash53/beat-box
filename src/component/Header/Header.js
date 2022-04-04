import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <div className="logo">
                <img src="../../images/beats-logo.png" alt="" />
            </div>
            <nav>
                <Link to="/Home">Home</Link>
                <Link to="/Review">Review</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/About">About</Link>
            </nav>
        </div>
    );
};

export default Header;