// Banner.js
import React, { useEffect } from 'react';
import './banner.css'; 
import useTypewriter from './UseTypeWriter';



const Banner = ({ selectedLanguage }) => {
  const textTranslations = {
    intro: {
      English: "  Hi, I'm Izzy. I love exploring the world around me. Thanks for stopping by!",
      中文: "  嗨，我是 Izzy。我喜歡探索我周圍美麗的世界。歡迎來到我的網站！"
    },
    passion: {
      English: " Truth, improvement, and altruism fuel my passion as a multidisciplinary engineer.",
      中文: " 追求真理、終身學習和利他主義激發了我作為多學科工程師的熱情。"
    },
    photography: {
      English: " In my free time, I enjoy backpacking and capturing the wonders of nature with my camera!",
      中文: " 在空閒時間，我喜歡背包旅行，並用相機捕捉大自然的奇觀！"
    },
    piano: {
      English: " I also love attending classical concerts and playing the piano. Beethoven is my favorite composer!",
      中文: " 我也喜歡參加古典音樂會和彈鋼琴。貝多芬是我最喜歡的作曲家！"
    }
  };

  const text0 = useTypewriter(textTranslations.intro[selectedLanguage], 20, selectedLanguage);
  const text1 = useTypewriter(textTranslations.passion[selectedLanguage], 20, selectedLanguage);
  const text2 = useTypewriter(textTranslations.photography[selectedLanguage], 20, selectedLanguage);
  const text3 = useTypewriter(textTranslations.piano[selectedLanguage], 20, selectedLanguage);
  
  useEffect(() => {
    const handleScroll = () => {
      const bannerLogo0 = document.querySelector('.banner-logo-0');
      const bannerOverlayLogo0 = document.querySelector('.banner-overlay-logo-0');

      const bannerLogo1 = document.querySelector('.banner-logo-1');
      const bannerOverlayLogo1 = document.querySelector('.banner-overlay-logo-1');

      const bannerLogo2 = document.querySelector('.banner-logo-2');
      const bannerOverlayLogo2 = document.querySelector('.banner-overlay-logo-2');
      
      const bannerLogo3 = document.querySelector('.banner-logo-3');
      const bannerOverlayLogo3 = document.querySelector('.banner-overlay-logo-3');
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

      bannerLogo3.style.transform = `scale(${scaleValue}) rotate(${-rotateValue}deg)`;
      bannerOverlayLogo3.style.transform = `scale(${scaleValue})`;
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
          <img className="banner-logo-0" src="../images/home/izzy-pirate.png" alt="Izzy Logo" loading="lazy"/>
          <img className="banner-overlay-logo-0" src="../images/home/izzy-pirate-overlay.png" alt="Overlay Logo" loading="lazy"/>
        </div>
        <div className="banner-header-text">
          <h1>{text0}</h1>
        </div>
      </div>

      <div className="banner-container">
        <div className="banner-header-text">
          <h1>{text1}</h1>
        </div>
        <div className="banner-image-overlay">
          <img className="banner-logo-1" src="../images/home/izzy-professional.png" alt="Izzy Logo" loading="lazy"/>
          <img className="banner-overlay-logo-1" src="../images/home/izzy-professional-overlay.png" alt="Overlay Logo" loading="lazy"/>
        </div>
      </div>

      <div className="banner-container">
        <div className="banner-image-overlay">
          <img className="banner-logo-2" src="../images/home/izzy-photographer.png" alt="Izzy Logo" loading="lazy"/>
          <img className="banner-overlay-logo-2" src="../images/home/izzy-photographer-overlay.png" alt="Overlay Logo" loading="lazy"/>
        </div>
        <div className="banner-header-text">
          <h1>{text2}</h1>
        </div>
      </div>
      <div className="banner-container">
        <div className="banner-header-text">
            <h1>{text3}</h1>
          </div>
          <div className="banner-image-overlay">
            <img className="banner-logo-3" src="../images/home/izzy-piano.png" alt="Izzy Logo" loading="lazy"/>
            <img className="banner-overlay-logo-3" src="../images/home/izzy-piano-overlay.png" alt="Overlay Logo" loading="lazy"/>
          </div>
      </div>
    </div>
  );
};

export default Banner;