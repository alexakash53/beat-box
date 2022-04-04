import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/beats-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className='container header-area'>
            <div className="logo">
                <Link to={'/'}><img src={ logo } alt="logo" /></Link>
            </div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/Review">Review</NavLink>
                <NavLink to="/Dashboard">Dashboard</NavLink>
                <NavLink to="/Blog">Blog</NavLink>
                <NavLink to="/About">About</NavLink>
            </nav>
        </div>
    );
};

export default Header;