import React, { useEffect } from 'react';
import './banner.css'; 

const Banner = () => {
    useEffect(() => {
      const handleScroll = () => {
        const bannerLogo0 = document.querySelector('.banner-logo-0');
        const bannerOverlayLogo0 = document.querySelector('.banner-overlay-logo-0');

        const bannerLogo1 = document.querySelector('.banner-logo-1');
        const bannerOverlayLogo1 = document.querySelector('.banner-overlay-logo-1');

        const bannerLogo2 = document.querySelector('.banner-logo-2');
        const bannerOverlayLogo2 = document.querySelector('.banner-overlay-logo-2');
        const scrollPosition = window.scrollY;
  
        // Calculate the degree of transformation based on scroll position
        const scaleValue = Math.min(1, 1 + scrollPosition / 1000); // Adjust the divisor to control the scaling speed
        const rotateValue = Math.min(scrollPosition % 720, 720 - scrollPosition % 720); // Rotate based on scroll position
  
        // Apply transformations
        bannerLogo0.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
        bannerOverlayLogo0.style.transform = `scale(${scaleValue})`;

        bannerLogo1.style.transform = `scale(${scaleValue}) rotate(${-rotateValue}deg)`;
        bannerOverlayLogo1.style.transform = `scale(${scaleValue})`;

        bannerLogo2.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
        bannerOverlayLogo2.style.transform = `scale(${scaleValue})`;
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
        <div>
        <div className="banner-container">
        <div className="banner-image-overlay">
            <img className="banner-logo-0" src="../images/izzy-pirate.png" alt="Izzy Logo"/>
            <img className="banner-overlay-logo-0" src="../images/izzy-pirate-overlay.png" alt="Overlay Logo"/>
          </div>
        <div className="banner-header-text">
            <h1>Hi, my name is Izzy. I love exploring the world around me. Welcome to my website!</h1>
        </div>
        </div>
        <div className="banner-container">
        <div className="banner-header-text">
            <h1>I'm an engineer. Truth, improvement, and altruism are the most important to me.</h1>
        </div>
        <div className="banner-image-overlay">
            <img className="banner-logo-1" src="../images/izzy-professional.png" alt="Izzy Logo"/>
            <img className="banner-overlay-logo-1" src="../images/izzy-professional-overlay.png" alt="Overlay Logo"/>
          </div>
        </div>
        <div className="banner-container">
        <div className="banner-image-overlay">
            <img className="banner-logo-2" src="../images/izzy-photographer.png" alt="Izzy Logo"/>
            <img className="banner-overlay-logo-2" src="../images/izzy-photographer-overlay.png" alt="Overlay Logo"/>
          </div>
        <div className="banner-header-text">
            <h1>In my free time, I love playing music and exploring natural wonders with my camera!</h1>
        </div>
        </div>
        </div>
    );
  }


export default Banner;