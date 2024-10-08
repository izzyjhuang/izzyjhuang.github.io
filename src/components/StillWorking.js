// still-working.js
import React from 'react';
import './stillworking.css'; 
import useTypewriter from './UseTypeWriter';



const StillWorking = ({ selectedLanguage }) => {
  const textTranslations = {
      English: "  I'm still working on this one, stay tuned!",
      中文: "  這篇我快做出來了，敬請期待！"
  };

  // const fallbackLanguage = 'English';
  const fullText = textTranslations[selectedLanguage] || textTranslations["English"];

  const displayedText = useTypewriter(fullText, 20, selectedLanguage);

  return (
    <div>
      <div className="still-working-container">
          <img className="still-working-img" src="images/still-working.jpg" alt="Izzy Logo" loading="lazy"/>
        <div className="still-working-header-text">
          <h1>{displayedText}</h1>
        </div>
      </div>
    </div>
  );
};

export default StillWorking;