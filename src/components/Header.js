import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ selectedLanguage, setSelectedLanguage }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setDropdownVisible(false);
  };

  const getText = (textKey) => {
    const translations = {
      Explorer: {
        English: 'Izzy The Explorer',
        中文: '探險家 Izzy',
      },
      Projects: {
        English: 'Projects',
        中文: '專案',
      },
      Adventures: {
        English: 'Adventures',
        中文: '冒險',
      },
      Notes: {
        English: 'Notes',
        中文: '筆記',
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
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;