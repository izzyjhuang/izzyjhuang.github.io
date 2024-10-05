import React, { useEffect, useState } from 'react';
import './banner.css'; 

const useTypewriter = (fullText, typingSpeed = 20, selectedLanguage) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    setDisplayedText(''); // Clear the text when the language changes

    let index = 0;
    const intervalId = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [fullText, typingSpeed, selectedLanguage]);

  return displayedText;
};

const Banner = ({ selectedLanguage }) => {
  const textTranslations = {
    intro: {
      English: "  Hi, my name is Izzy. I love exploring the world around me. Welcome to my website!",
      中文: "  嗨，我是奇奇。我喜歡探索我周圍的世界。歡迎來到我的網站！"
    },
    passion: {
      English: " Truth, improvement, and altruism fuel my passion as a multidisciplinary engineer.",
      中文: " 追求真理、終身學習和利他主義激發了我作為多學科工程師的熱情。"
    },
    hobby: {
      English: " In my free time, I love playing music and exploring natural wonders with my camera!",
      中文: " 在空閒時間，我喜歡演奏音樂，並用相機探索大自然的奇觀！"
    }
  };

  const text0 = useTypewriter(textTranslations.intro[selectedLanguage], 20, selectedLanguage);
  const text1 = useTypewriter(textTranslations.passion[selectedLanguage], 20, selectedLanguage);
  const text2 = useTypewriter(textTranslations.hobby[selectedLanguage], 20, selectedLanguage);

  return (
    <div>
      <div className="banner-container">
        <div className="banner-image-overlay">
          <img className="banner-logo-0" src="../images/izzy-pirate.png" alt="Izzy Logo" loading="lazy"/>
          <img className="banner-overlay-logo-0" src="../images/izzy-pirate-overlay.png" alt="Overlay Logo" loading="lazy"/>
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
          <h1>{text2}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;