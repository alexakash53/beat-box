import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/beats-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='container header-area'>
            <div className="logo">
                <Link to={'/'}><img src={ logo } alt="logo" /></Link>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Review">Review</Link>
                <Link to="/Dashboard">Dashboard</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/About">About</Link>
            </nav>
        </div>
    );
};

export default Header;