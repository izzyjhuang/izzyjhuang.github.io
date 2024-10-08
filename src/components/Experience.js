// Experience.js
import React, { useEffect } from 'react';
import ExperienceAlbum from './ExperienceAlbum';
import useTypewriter from './UseTypeWriter'; // Import the custom hook
import "./master.css";
import "./Experience.css";

const Experience = ({ selectedLanguage }) => {
    // Define translations for the full text
    const textTranslations = {
        English: "  My favorite adventure is going Skydiving in Utah! I'm visiting Hobbiton in New Zealand next!",
        中文: " 我最喜歡的冒險是去猶他州跳傘！我接下來要去紐西蘭看拍攝哈比人的哈比屯！"
    };

    // Get the full text based on the selected language
    const fullText = textTranslations[selectedLanguage] || textTranslations['English'];

    // Use the custom useTypewriter hook
    const displayedText = useTypewriter(fullText, 20, selectedLanguage);

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
            {/* <div className="page-warmer">
                <img className="page-photo" src="../images/Experience/skydive-moab.png" alt="skydive-moab" loading="lazy" />
                <h1 className="page-text">{displayedText}</h1> 
            </div> */}
            <ExperienceAlbum />
        </div>
    );
}

export default Experience;