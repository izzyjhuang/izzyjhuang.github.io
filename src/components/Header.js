import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css'; // Assuming you have this CSS file in the same folder


const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
      <Link to="/">
        <div className="image-overlay">
            <img className="logo" src="../images/izzy-pirate.png" alt="Izzy Logo"/>
            <img className="overlay-logo" src="../images/izzy-pirate-overlay.png" alt="Overlay Logo"/>
            <h1 className="header-text">Izzy The Explorer</h1>
          </div>
          </Link>
      </div>
      <nav className="nav-links">
        <Link to="/projects" className="nav-link">Projects</Link> {/* Use Link instead of a */}
        <Link to="/adventures" className="nav-link">Adventures</Link> {/* Use Link instead of a */}
        <Link to="/notes" className="nav-link">Notes</Link> {/* Use Link instead of a */}
      </nav>
      <div className="language-selector">
        <span>Language</span>
        <i className="arrow-down">▾</i>
      </div>
    </header>
  );
}

export default Header;