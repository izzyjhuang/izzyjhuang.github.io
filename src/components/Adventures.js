// Adventures.js
import React, { useEffect } from 'react';
import AdventureAlbum from './AdventureAlbum';
import useTypewriter from './UseTypeWriter'; // Import the custom hook
import "./master.css";
import "./adventures.css";

const Adventures = ({ selectedLanguage }) => {
    // Define translations for the full text
    const textTranslations = {
        intro: {
            English: "  My favorite adventure was going Skydiving in Utah! I'm visiting Hobbiton in New Zealand next!",
            中文: "  我最喜歡的冒險是去猶他州跳傘！我接下來要去紐西蘭看拍攝哈比人的哈比屯！"
        },
        countries: {
            English: " 13 countries",
            中文: " 13 個國家"
          },
          nationalParks: {
            English: " 6 National Parks",
            中文: " 6 個國家公園"
          },
          states: {
            English: " 17 States",
            中文: " 17 個州"
          },
          stadiums: {
            English: " 5 Stadiums",
            中文: " 5 座棒球場"
          },

    };

    // Get the full text based on the selected language
    // const fullText = textTranslations[selectedLanguage] || textTranslations['English'];

    // Use the custom useTypewriter hook
    const displayedText = useTypewriter(textTranslations.intro[selectedLanguage], 20, selectedLanguage);

    const text4 = useTypewriter(textTranslations.countries[selectedLanguage], 20, selectedLanguage);
    const text5 = useTypewriter(textTranslations.nationalParks[selectedLanguage], 20, selectedLanguage);
    const text6 = useTypewriter(textTranslations.states[selectedLanguage], 20, selectedLanguage);
    const text7 = useTypewriter(textTranslations.stadiums[selectedLanguage], 20, selectedLanguage);
    // Scroll event handling for image scaling and rotation
    useEffect(() => {
        const handleScroll = () => {
            const pagePhoto = document.querySelector('.page-photo');
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

    return (
        <div>
            <div className="page-warmer">
                <img className="page-photo" src="../images/adventures/skydive-moab.png" alt="skydive-moab" loading="lazy" />
                <h1 className="page-text">{displayedText}</h1> {/* Display the typing text */}
            </div>
            
      <div className="stat-container">
        <div className="stat-box">
          <img src="../images/adventures/countries-count.png" alt="Countries Logo"></img>
          <p>{text4}</p>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/national-parks-count.png" alt="Countries Logo"></img>
          <p>{text5}</p>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/states-count.png" alt="Countries Logo"></img>
          <p>{text6}</p>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/stadiums-count.png" alt="Countries Logo"></img>
          <p>{text7}</p>
        </div>
      </div>
            <AdventureAlbum />
        </div>
    );
}

export default Adventures;