import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  // Determine the text based on the selected language
  const getText = (textKey) => {
    const translations = {
      Explorer: {
        English: 'Izzy The Explorer',
        中文: '探險家奇奇',
        // Español: 'Izzy El Explorador'
      },
      Projects: {
        English: 'Projects',
        中文: '專案',
        // Español: 'Proyectos'
      },
      Adventures: {
        English: 'Adventures',
        中文: '冒險',
        // Español: 'Aventuras'
      },
      Notes: {
        English: 'Notes',
        中文: '筆記',
        // Español: 'Notas'
      }
    };
    return translations[textKey][selectedLanguage];
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <div className="image-overlay">
            <img className="logo" src="../images/izzy-pirate.png" loading="lazy" alt="Izzy Logo" />
            <img className="overlay-logo" src="../images/izzy-pirate-overlay.png" loading="lazy" alt="Overlay Logo" />
          </div>
          <h1 className="header-text">{getText('Explorer')}</h1>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/projects" className="nav-link">{getText('Projects')}</Link>
        <Link to="/adventures" className="nav-link">{getText('Adventures')}</Link>
        <Link to="/notes" className="nav-link">{getText('Notes')}</Link>
      </nav>
      <div className="language-selector" onClick={toggleDropdown}>
        <span>{selectedLanguage}</span>
        <i className="arrow-down">▾</i>
        {isDropdownVisible && (
          <ul className="language-dropdown">
            <li onClick={() => handleLanguageSelect('English')}>English</li>
            <li onClick={() => handleLanguageSelect('中文')}>中文</li>
            {/* <li onClick={() => handleLanguageSelect('Español')}>Español</li> */}
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
