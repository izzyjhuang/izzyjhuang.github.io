// UseTypeWriter.js
import { useEffect, useState } from 'react';

const useTypewriter = (fullText, typingSpeed = 40, selectedLanguage) => {
    const [displayedText, setDisplayedText] = useState('');
  
    useEffect(() => {
      setDisplayedText(''); // Clear the text when the language changes
  
      let index = 0;
      const intervalId = setInterval(() => {
        if (index < fullText.length) {
          setDisplayedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(intervalId);
        }
      }, typingSpeed);
  
      return () => clearInterval(intervalId);
    }, [fullText, typingSpeed, selectedLanguage]);
  
    return displayedText;
  };

export default useTypewriter;