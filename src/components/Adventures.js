// Adventures.js
import React, { useEffect, useState } from 'react';
import AdventureAlbum from './AdventureAlbum';
import "./master.css";
import "./adventures.css"

const Adventures = () => {
    const [displayedText, setDisplayedText] = useState(''); // State to store the text being typed
    const fullText = "M y favorite adventure is going Skydiving in Utah! I'm visiting Hobbiton in New Zealand next!";

    // Typewriter effect
    useEffect(() => {
        let index = 0;
        const typingSpeed = 20; // Adjust the typing speed (in ms)

        const typeWriter = () => {
            if (index < fullText.length) {
                setDisplayedText((prev) => prev + fullText.charAt(index));
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
    }, [fullText]);

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
            <AdventureAlbum />
        </div>
    );
}

export default Adventures;
