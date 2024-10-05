import React, { useEffect, useState } from 'react';
import './banner.css'; 

const Banner = () => {

  const [displayedText0, setDisplayedText0] = useState(''); // State to store the text being typed
  const fullText0 = "  Hi, my name is Izzy. I love exploring the world around me. Welcome to my website!";

  // Typewriter effect
  useEffect(() => {
      let index = 0;
      const typingSpeed = 20; // Adjust the typing speed (in ms)

      const typeWriter = () => {
          if (index < fullText0.length) {
            setDisplayedText0((prev) => prev + fullText0.charAt(index));
              index++;
          } else {
              clearInterval(intervalId); // Stop the interval once the full text is typed
          }
      };

      // Set an interval to run typeWriter at the specified typing speed
      const intervalId = setInterval(typeWriter, typingSpeed);

      // Cleanup function to clear the interval if the component unmounts
      return () => {
          clearInterval(intervalId);
      };
  }, [fullText0]);

  const [displayedText1, setDisplayedText1] = useState(''); // State to store the text being typed
  const fullText1 = " Truth, improvement, and altruism fuel my passion as a multidisciplinary engineer.";

  // Typewriter effect
  useEffect(() => {
      let index = 0;
      const typingSpeed = 20; // Adjust the typing speed (in ms)

      const typeWriter = () => {
          if (index < fullText1.length) {
            setDisplayedText1((prev) => prev + fullText1.charAt(index));
              index++;
          } else {
              clearInterval(intervalId); // Stop the interval once the full text is typed
          }
      };

      // Set an interval to run typeWriter at the specified typing speed
      const intervalId = setInterval(typeWriter, typingSpeed);

      // Cleanup function to clear the interval if the component unmounts
      return () => {
          clearInterval(intervalId);
      };
  }, [fullText1]);

  const [displayedText2, setDisplayedText2] = useState(''); // State to store the text being typed
  const fullText2 = " In my free time, I love playing music and exploring natural wonders with my camera!";

  // Typewriter effect
  useEffect(() => {
      let index = 0;
      const typingSpeed = 20; // Adjust the typing speed (in ms)

      const typeWriter = () => {
          if (index < fullText2.length) {
            setDisplayedText2((prev) => prev + fullText2.charAt(index));
              index++;
          } else {
              clearInterval(intervalId); // Stop the interval once the full text is typed
          }
      };

      // Set an interval to run typeWriter at the specified typing speed
      const intervalId = setInterval(typeWriter, typingSpeed);

      // Cleanup function to clear the interval if the component unmounts
      return () => {
          clearInterval(intervalId);
      };
  }, [fullText2]);


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
            <img className="banner-logo-0" src="../images/izzy-pirate.png" alt="Izzy Logo" loading="lazy"/>
            <img className="banner-overlay-logo-0" src="../images/izzy-pirate-overlay.png" alt="Overlay Logo" loading="lazy"/>
          </div>
        <div className="banner-header-text">
            <h1>
            {displayedText0}
            </h1>
        </div>
        </div>
        <div className="banner-container">
        <div className="banner-header-text">
            <h1>
            {displayedText1}
            </h1>
        </div>
        <div className="banner-image-overlay">
            <img className="banner-logo-1" src="../images/izzy-professional.png" alt="Izzy Logo" loading="lazy"/>
            <img className="banner-overlay-logo-1" src="../images/izzy-professional-overlay.png" alt="Overlay Logo" loading="lazy"/>
          </div>
        </div>
        <div className="banner-container">
        <div className="banner-image-overlay">
            <img className="banner-logo-2" src="../images/izzy-photographer.png" alt="Izzy Logo" loading="lazy"/>
            <img className="banner-overlay-logo-2" src="../images/izzy-photographer-overlay.png" alt="Overlay Logo" loading="lazy"/>
          </div>
        <div className="banner-header-text">
            <h1>
            {displayedText2}
            </h1>
        </div>
        </div>
        </div>
    );
  }


export default Banner;