// Notes.js
import React from 'react';
import StillWorking from './StillWorking';

const Notes = ({ selectedLanguage }) => {
    return (
      <div>
        {/* Pass the selectedLanguage prop to StillWorking */}
        <StillWorking selectedLanguage={selectedLanguage} />
      </div>
    );
  };

export default Notes;