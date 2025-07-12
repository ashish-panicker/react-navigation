import React from 'react';
import './Navbar.css'; // Import the CSS file for Navbar component

const Navbar = () => {
  return (
    <header className="navbar-header">
      <h1 className="navbar-title">My Application</h1>
      <nav className="navbar-nav">
        {/* These are simple divs/spans, not actual routing links */}
        <div className="nav-item">Home</div>
        <div className="nav-item">Users</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Contact</div>
      </nav>
    </header>
  );
};

export default Navbar;
