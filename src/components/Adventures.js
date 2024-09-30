// Adventures.js
import React, { useEffect } from 'react';
import AdventureAlbum from './AdventureAlbum';
import "./master.css";
import "./adventures.css"

const Adventures = () => {
    useEffect(() => {
        const handleScroll = () => {
          const pagePhoto = document.querySelector('.page-photo');
          const scrollPosition = window.scrollY;
    
          // Calculate the degree of transformation based on scroll position
          const scaleValue = 0.95+Math.sin((scrollPosition+180)/60)/10; // Adjust the divisor to control the scaling speed
          const rotateValue = Math.sin(scrollPosition/60)*30; // Rotate based on scroll position
    
          // Apply transformations
          pagePhoto.style.transform = `scale(${scaleValue}) rotate(${rotateValue}deg)`;

        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <div>
        <div className="page-warmer">
            <img className="page-photo" src="../images/adventures/skydive-moab.png" alt="../images/skydive-moab.png"/>
            <h1 className="page-text">I recently checked off skydiving from my bucket list, I'll be visiting the Hobbiton in New Zealand soon!</h1>
          </div>
      <AdventureAlbum/>
    </div>
  );
}

export default Adventures;