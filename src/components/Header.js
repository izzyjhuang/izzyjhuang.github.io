import React, { useState } from 'react'; // Import useState for managing dropdown state
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './header.css'; // Assuming you have this CSS file in the same folder

const Header = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // State for toggling dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState('English'); // State for managing selected language

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownVisible(false); // Close the dropdown after selection
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <div className="image-overlay">
            <img className="logo" src="../images/izzy-pirate.png" loading="lazy" alt="Izzy Logo" />
            <img className="overlay-logo" src="../images/izzy-pirate-overlay.png" loading="lazy" alt="Overlay Logo" />
          </div>
          <h1 className="header-text">
          {selectedLanguage === 'English' ? 'Izzy The Explorer' : '探險家奇奇'}
          </h1>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/projects" className="nav-link">
          {selectedLanguage === 'English' ? 'Projects' : '企劃'}
        </Link>
        <Link to="/adventures" className="nav-link">
          {selectedLanguage === 'English' ? 'Adventures' : '冒險'}
        </Link>
        <Link to="/notes" className="nav-link">
          {selectedLanguage === 'English' ? 'Notes' : '筆記'}
        </Link>
      </nav>
      <div className="language-selector" onClick={toggleDropdown}>
        <span>{selectedLanguage}</span>
        <i className="arrow-down">▾</i>
        {isDropdownVisible && (
          <ul className="language-dropdown">
            <li onClick={() => handleLanguageSelect('English')}>English</li>
            <li onClick={() => handleLanguageSelect('中文')}>中文</li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;