import React from 'react';
import PhilosophyAlbum from './PhilosophyAlbum';
import './philosophy.css';
import useTypewriter from './UseTypeWriter';

const Philosophy = ({ selectedLanguage }) => {
    // Placeholder quote translations
    const textTranslations = {
        English: '  To live without examining life is to breathe without ever noticing the wind.',
        中文: '  「哲學的本質在於不斷提問與思考，而非僅僅尋求答案。」'
    };
    const fullText = textTranslations[selectedLanguage] || textTranslations['English'];
    const displayedText = useTypewriter(fullText, 20, selectedLanguage);

    // Scroll event handling for image scaling and rotation (copy from Experience.js, but use .banner-logo-ph and .banner-overlay-logo-ph)
    React.useEffect(() => {
        const handleScroll = () => {
            const bannerLogo = document.querySelector('.banner-logo-ph');
            const bannerOverlayLogo = document.querySelector('.banner-overlay-logo-ph');
            const scrollPosition = window.scrollY;
            if (bannerLogo) {
                const scaleValue = Math.min(1, 1 + scrollPosition / 1000);
                const rotateValue = Math.min(scrollPosition % 720, 720 - scrollPosition % 720);
                bannerLogo.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;
            }
            if (bannerOverlayLogo) {
                const scaleValue = Math.min(1, 1 + scrollPosition / 1000);
                bannerOverlayLogo.style.transform = `scale(${scaleValue})`;
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="page-warmer">
                <div className="banner-image-overlay-ph">
                    <img className="banner-logo-ph" src="../images/home/izzy-pirate.png" alt="Izzy Logo" loading="lazy"/>
                    <img className="banner-overlay-logo-ph" src="../images/home/izzy-in-istanbul.png" alt="Overlay Logo" loading="lazy"/>
                </div>
                <h1 className="page-text">{displayedText}</h1>
            </div>
            <PhilosophyAlbum selectedLanguage={selectedLanguage} />
        </div>
    );
};

export default Philosophy;