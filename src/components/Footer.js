import React from 'react';
import './footer.css'; // Assuming you store the CSS in Footer.css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome
import { faThreads, faXTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'; // For non-branded icons

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icons">
      <a href="https://linkedin.com/in/izzyhuang" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} /> 
          <span>LinkedIn</span>
        </a>
        <a href="https://x.com/izzyjhuang" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} />
          <span>Twitter</span>
        </a>
        <a href="https://www.threads.net/@izh_27" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faThreads} />
          <span>Threads</span>
        </a>
        <a href="mailto:izzythebroker@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} /> 
          <span>Email</span>
        </a>
      </div>

        <div className="footer-links">
            <h5>This website was built with 
                <a href="https://react.dev/" target="_blank" rel="noopener noreferrer"> ReactJS</a>
            </h5>
            <h5>© Copyright 2024 Izzy Huang</h5>
        </div>
    </div>
  );
}

export default Footer;