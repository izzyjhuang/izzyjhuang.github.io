// Adventures.js
import React, { useEffect } from 'react';
import AdventureAlbum from './AdventureAlbum';
import useTypewriter from './UseTypeWriter'; // Import the custom hook
import "./master.css";
import "./adventures.css";

const Adventures = ({ selectedLanguage }) => {
    // Define translations for the full text
    const textTranslations = {
        countries: {
            English: "  16 countries",
            中文: "  16 個國家"
        },
        nationalParks: {
            English: "  6 National Parks",
            中文: "  6 個國家公園"
        },
        states: {
            English: "  21 States",
            中文: "  21 個州"
        },
        stadiums: {
            English: "  5 Stadiums",
            中文: "  5 座棒球場"
        },
        bannerText: {
            English: "  My favorite adventure was going Skydiving in Utah! I'll be visiting Scandinavia soon!",
            中文: "  我最喜歡的冒險是去猶他州跳傘！我很期待接下來要去北歐玩！"
        },
        yearCount: {
            English: "  this year",
            中文: "  今年新造訪"
        }
    };    

    // Get the full text based on the selected language
    // const fullText = textTranslations[selectedLanguage] || textTranslations['English'];

    // Use the custom useTypewriter hook
    // const displayedText = useTypewriter(textTranslations.intro[selectedLanguage], 20, selectedLanguage);
    const text4 = useTypewriter(textTranslations.countries[selectedLanguage], 20, selectedLanguage);
    const text5 = useTypewriter(textTranslations.nationalParks[selectedLanguage], 20, selectedLanguage);
    const text6 = useTypewriter(textTranslations.states[selectedLanguage], 20, selectedLanguage);
    const text7 = useTypewriter(textTranslations.stadiums[selectedLanguage], 20, selectedLanguage);
    const text8 = useTypewriter(textTranslations.bannerText[selectedLanguage], 20, selectedLanguage);
    const text9 = useTypewriter(textTranslations.yearCount[selectedLanguage], 20, selectedLanguage);
    // Scroll event handling for image scaling and rotation
    useEffect(() => {
        const handleScroll = () => {
            const pagePhoto = document.querySelector('.page-photo');
            const scrollPosition = window.scrollY;

            const scaleValue = 0.95 + Math.sin((scrollPosition + 180) / 20) / 10; // Control scaling
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
                <p className="page-text-1">{text8}</p> {/* Display the typing text */}
            </div>
            
      <div className="stat-container">
        <div className="stat-box">
          <img src="../images/adventures/countries-count.png" alt="Countries Logo"></img>
          <p>{text4}</p>
          <h6>+3{text9}</h6>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/national-parks-count.png" alt="Countries Logo"></img>
          <p>{text5}</p>
          <h6>+0{text9}</h6>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/states-count.png" alt="Countries Logo"></img>
          <p>{text6}</p>
          <h6>+1{text9}</h6>
        </div>
        <div className="stat-box">
          <img src="../images/adventures/stadiums-count.png" alt="Countries Logo"></img>
          <p>{text7}</p>
          <h6>+2{text9}</h6>
        </div>
      </div>
            <AdventureAlbum selectedLanguage={selectedLanguage} />
        </div>
    );
}

export default Adventures;