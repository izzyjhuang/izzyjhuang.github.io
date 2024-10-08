// Projects.js
import React, { useEffect } from 'react';
import ProjectAlbum from './ProjectAlbum';
import useTypewriter from './UseTypeWriter'; // Import the custom hook
import './master.css';


const Projects = ({ selectedLanguage }) => {
     // Define translations for the full text
     const textTranslations = {
      English: "  You can't use up creativity. The more you use, the more you have!",
      中文: "  創造力是無窮無盡的，你用越多，你擁有的就越多！"
  };

  // Get the full text based on the selected language
  const fullText = textTranslations[selectedLanguage] || textTranslations['English'];

  // Use the custom useTypewriter hook
  const displayedText = useTypewriter(fullText, 20, selectedLanguage);

  // Scroll event handling for image scaling and rotation
  useEffect(() => {
      const handleScroll = () => {
          const pagePhoto = document.querySelector('.banner-logo-p');
          const scrollPosition = window.scrollY;

          const scaleValue = 0.95 + Math.sin((scrollPosition + 180) / 60) / 10; // Control scaling
          const rotateValue = Math.sin(scrollPosition / 60) * 30; // Rotate based on scroll

          pagePhoto.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove scroll listener when component unmounts
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []); // Empty dependency array to run only on mount/unmount

  useEffect(() => {
    const handleScroll = () => {
      const bannerLogo = document.querySelector('.banner-logo-p');
      const bannerOverlayLogo = document.querySelector('.banner-overlay-logo-p');
      const scrollPosition = window.scrollY;

      // Calculate the degree of transformation based on scroll position
      const scaleValue = Math.min(1, 1 + scrollPosition / 1000); // Adjust the divisor to control the scaling speed
      const rotateValue = Math.min(scrollPosition % 720, 720 - scrollPosition % 720); // Rotate based on scroll position

      // Apply transformations
      bannerLogo.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
      bannerOverlayLogo.style.transform = `scale(${scaleValue})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


    return (
        <div>
          <div className="page-warmer">
            <div className="banner-image-overlay">
              <img className="banner-logo-p" src="../images/home/izzy-photographer.png" alt="Izzy Logo" loading="lazy"/>
              <img className="banner-overlay-logo-p" src="../images/home/izzy-photographer-overlay.png" alt="Overlay Logo" loading="lazy"/>
            </div>                
            <h1 className="page-text">{displayedText}</h1> 
            </div>
          <ProjectAlbum />
        </div>
      );
};

export default Projects;