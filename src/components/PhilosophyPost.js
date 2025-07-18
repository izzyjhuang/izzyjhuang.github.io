// ThinklabPost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/philosophy-entries'
import './philosophy.css'

function formatParagraph(text, lang) {
  // Bold the key question
  if (text.trim() === 'If life were an investment, which strategy would you adopt?' ||
      text.trim() === '如果人生是一項投資，你會選擇哪種策略？') {
    return <strong>{text}</strong>;
  }
  // Bold the 'Bet on yourself...' sentence
  if (text.trim() === 'Bet on yourself. Invest in yourself. Believe in yourself.' ||
      text.trim() === '相信自己，投資自己，勇敢做自己。') {
    return <strong>{text}</strong>;
  }
  // Bold 'time' or '時間'
  if (text.includes('Young adults, in particular, possess a powerful asset: time.')) {
    return text.split(/(time)/g).map((part, i) =>
      part === 'time' ? <strong key={i}>time</strong> : part
    );
  }
  if (text.includes('年輕人尤其擁有一項寶貴資產：時間。')) {
    return text.split(/(時間)/g).map((part, i) =>
      part === '時間' ? <strong key={i}>時間</strong> : part
    );
  }
  // Italicize specific phrases
  const italics = [
    { en: "it's better to have loved and lost than never to have loved at all", zh: "寧可愛過而失去，也不要從未愛過。" },
    { en: "What doesn’t kill you makes you stronger.", zh: "殺不死你的，會讓你更強大。" }
  ];
  let elements = [text];
  italics.forEach(({ en, zh }) => {
    if (typeof elements[0] === 'string' && elements[0].includes(en)) {
      elements = elements[0].split(en).reduce((acc, part, i, arr) => {
        if (i < arr.length - 1) {
          return [...acc, part, <em key={i}>{en}</em>];
        }
        return [...acc, part];
      }, []);
    }
    if (typeof elements[0] === 'string' && elements[0].includes(zh)) {
      elements = elements[0].split(zh).reduce((acc, part, i, arr) => {
        if (i < arr.length - 1) {
          return [...acc, part, <em key={i}>{zh}</em>];
        }
        return [...acc, part];
      }, []);
    }
  });
  // Italicize double-quoted or Chinese-quoted substrings
  elements = elements.flatMap((el, idx) => {
    if (typeof el !== 'string') return el;
    // English quotes
    if (el.includes('"')) {
      return el.split(/("[^"]+")/g).map((part, i) =>
        part.startsWith('"') && part.endsWith('"') ? <em key={idx + '-' + i}>{part}</em> : part
      );
    }
    // Chinese quotes
    if (el.includes('「') && el.includes('」')) {
      return el.split(/(「[^」]+」)/g).map((part, i) =>
        part.startsWith('「') && part.endsWith('」') ? <em key={idx + '-' + i}>{part}</em> : part
      );
    }
    return el;
  });
  return elements;
}

const ThinklabPost = ({ selectedLanguage = 'English' }) => {
    const { slug } = useParams()

    // Find the corresponding philosophy entry by its slug
    const philosophy = entries.itemlist.find(entry => entry.slug === slug)

    if (!philosophy) {
        return <div>thinklab post not found</div>
    }

    const displayCaption = selectedLanguage === '中文' && philosophy.caption_zh ? philosophy.caption_zh : philosophy.caption;
    const displaySummary = selectedLanguage === '中文' && philosophy.summary_zh ? philosophy.summary_zh : philosophy.summary;
    const displayGenre = selectedLanguage === '中文' && philosophy.genre_zh ? philosophy.genre_zh : philosophy.genre;
    const displayDate = selectedLanguage === '中文' && philosophy.date_zh ? philosophy.date_zh : philosophy.date;

    return (
        <div className="philosophy-post">
            <img className="philosophy-banner" src={`../images/philosophy/${philosophy.banner}`} alt={displayCaption} loading="lazy"/>
            <div className="philosophy-poster">
                <h2 className="philosophy-genre">{displayGenre}</h2>
                <h1 className="philosophy-title">{displayCaption}</h1>
                <h3 className="philosophy-dates">{displayDate}</h3>
                {displaySummary && <div className="philosophy-summary">{displaySummary}</div>}
                <div className="philosophy-blog-content">
                    {/* Loop through the blog content and render paragraphs and images */}
                    {philosophy.blogPost && philosophy.blogPost.map((content, index) => {
                        if (content.type === 'paragraph') {
                            const displayHeader = selectedLanguage === '中文' && content.header_zh ? content.header_zh : content.header;
                            let displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                            const paraClass = content.className ? content.className : 'philosophy-paragraph';

                            return (
                                <div className={paraClass} key={`${slug}-paragraph-${index}`}>
                                    {displayHeader && <h4>{displayHeader}</h4>}
                                    <p>{formatParagraph(displayText, selectedLanguage)}</p>
                                </div>
                            );
                        } else if (content.type === 'images-3') {
                            const alt1 = selectedLanguage === '中文' && content.alt1_zh ? content.alt1_zh : content.alt1;
                            const alt2 = selectedLanguage === '中文' && content.alt2_zh ? content.alt2_zh : content.alt2;
                            const alt3 = selectedLanguage === '中文' && content.alt3_zh ? content.alt3_zh : content.alt3;
                            return (
                                <div className="images-3" key={`${slug}-images3-${index}}`}>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src1}`} alt={alt1} loading="lazy"/>
                                        <h5>{alt1}</h5>
                                    </div>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src2}`} alt={alt2} loading="lazy"/>
                                        <h5>{alt2}</h5>
                                    </div>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src3}`} alt={alt3} loading="lazy"/>
                                        <h5>{alt3}</h5>
                                    </div>
                                </div>
                            );
                        } else if (content.type === 'images-2') {
                            const alt1 = selectedLanguage === '中文' && content.alt1_zh ? content.alt1_zh : content.alt1;
                            const alt2 = selectedLanguage === '中文' && content.alt2_zh ? content.alt2_zh : content.alt2;
                            return (
                                <div className="images-2" key={`${slug}-images2-${index}}`}>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src1}`} alt={alt1} loading="lazy"/>
                                        <h5>{alt1}</h5>
                                    </div>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src2}`} alt={alt2} loading="lazy"/>
                                        <h5>{alt2}</h5>
                                    </div>
                                </div>
                            );
                        } else if (content.type === 'image-left') {
                            const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                            const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                            return (
                                <div className="image-left" key={`${slug}-imageleft-${index}}`}>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src}`} alt={displayAlt} loading="lazy"/>
                                        <h5>{displayAlt}</h5>
                                    </div>
                                    <p>{displayText}</p>
                                </div>
                            );
                        } else if (content.type === 'image-right') {
                            const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                            const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                            return (
                                <div className="image-right" key={`${slug}-imageright-${index}}`}>
                                    <p>{displayText}</p>
                                    <div className="image-box">
                                        <img src={`../images/philosophy/${content.src}`} alt={displayAlt} loading="lazy"/>
                                        <h5>{displayAlt}</h5>
                                    </div>
                                </div>
                            );
                        } else if (content.type === 'image') {
                            const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                            return (
                                <img key={`${slug}-image-${index}`} src={`../images/philosophy/${content.src}`} alt={displayAlt} className="philosophy-sub-img" loading="lazy"/>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    );
}

export default ThinklabPost; 