import React from 'react';
import PhilosophyAlbum from './PhilosophyAlbum';
import './philosophy.css';

const Philosophy = ({ selectedLanguage }) => {
    // You can add banner text or intro here if desired
    return (
        <div>
            <div className="philosophy-page-header">
                <h1>{selectedLanguage === '中文' ? '哲學筆記' : 'Philosophy Notes'}</h1>
            </div>
            <PhilosophyAlbum selectedLanguage={selectedLanguage} />
        </div>
    );
};

export default Philosophy;