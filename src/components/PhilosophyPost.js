// PhilosophyPost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/philosophy-entries'
import './philosophy.css'

const PhilosophyPost = ({ selectedLanguage = 'English' }) => {
    const { slug } = useParams()

    // Find the corresponding philosophy entry by its slug
    const philosophy = entries.itemlist.find(entry => entry.slug === slug)

    if (!philosophy) {
        return <div>philosophy not found</div>
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
                            const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                            const paraClass = content.className ? content.className : 'philosophy-paragraph';
                            return (
                                <div className={paraClass} key={`${slug}-paragraph-${index}`}>
                                    {displayHeader && <h4>{displayHeader}</h4>}
                                    <p>{displayText}</p>
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

export default PhilosophyPost; 