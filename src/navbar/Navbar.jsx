import React from 'react';
import './Navbar.css';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <header className="navbar-header">
      <h1 className="navbar-title">My Application</h1>
      <nav className="navbar-nav">
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/users" className="nav-item">Users</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
