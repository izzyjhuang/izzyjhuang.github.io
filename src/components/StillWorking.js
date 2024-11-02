// still-working.js
import React from 'react';
import './stillworking.css'; 
import useTypewriter from './UseTypeWriter';



const StillWorking = ({ selectedLanguage }) => {
  const textTranslations = {
      English: "  I'm still working on this one, ask me about it in person!",
      中文: "  這篇我還在做，直接問我吧！"
  };

  // const fallbackLanguage = 'English';
  const fullText = textTranslations[selectedLanguage] || textTranslations["English"];

  const displayedText = useTypewriter(fullText, 20, selectedLanguage);

  return (
    <div>
      <div className="still-working-container">
          <img className="still-working-img" src="images/home/still-working.jpg" alt="Izzy Logo" loading="lazy"/>
        <div className="still-working-header-text">
          <h1>{displayedText}</h1>
        </div>
      </div>
    </div>
  );
};

export default StillWorking;