// AdventurePost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/adventure-entries'
import './adventures.css'

const AdventurePost = ({ selectedLanguage = 'English' }) => {
    const { slug } = useParams()

    // Find the corresponding adventure entry by its slug
    const adventure = entries.itemlist.find(entry => entry.slug === slug)

    if (!adventure) {
        return <div>Adventure not found</div>
    }

    const displayGenre = selectedLanguage === '中文' && adventure.genre_zh ? adventure.genre_zh : adventure.genre;
    const displayTitle = selectedLanguage === '中文' && adventure.title_zh ? adventure.title_zh : adventure.title;

    return (
        <div className="adventure-post">
            <img className="adventure-banner" src={`../images/adventures/${adventure.banner}`} alt={adventure.caption}  loading="lazy"/>
            <div className="adventure-poster">
                <h2 className="adventure-genre">{displayGenre}</h2>
                <h1 className="adventure-title">{displayTitle}</h1>
                <h3 className="adventure-dates">{adventure.dates}</h3>
                <div className="adventure-blog-content">
                {/* Loop through the blog content and render paragraphs and images */}
                {adventure.blogPost.map((content, index) => {
                    if (content.type === 'paragraph') {
                        const displayHeader = selectedLanguage === '中文' && content.header_zh ? content.header_zh : content.header;
                        const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                        return (
                            <div className="paragraph" key={`${slug}-paragraph-${index}`}>
                                <h4>{displayHeader}</h4>
                                <p>{displayText}</p>
                            </div>
                        )
                    } else if (content.type === 'images-3') {
                        const displayAlt1 = selectedLanguage === '中文' && content.alt1_zh ? content.alt1_zh : content.alt1;
                        const displayAlt2 = selectedLanguage === '中文' && content.alt2_zh ? content.alt2_zh : content.alt2;
                        const displayAlt3 = selectedLanguage === '中文' && content.alt3_zh ? content.alt3_zh : content.alt3;
                        return (
                            <div className="images-3" key={`${slug}-images3-${index}`}>
                                <div className="image-box">
                                    <img src={`../images/adventures/${content.src1}`} alt={displayAlt1} loading="lazy"/>
                                    <h5>{displayAlt1}</h5>
                                </div>
                                <div className="image-box">
                                    <img src={`../images/adventures/${content.src2}`} alt={displayAlt2} loading="lazy"/>
                                    <h5>{displayAlt2}</h5>
                                </div>
                                <div className="image-box">
                                    <img src={`../images/adventures/${content.src3}`} alt={displayAlt3} loading="lazy"/>
                                    <h5>{displayAlt3}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'images-2') {
                        return (
                            <div className="images-2" key={`${slug}-images2-${index}`}>
                                <img src={`../images/adventures/${content.src1}`} alt={content.alt1} loading="lazy"/>
                                <img src={`../images/adventures/${content.src2}`} alt={content.alt2} loading="lazy"/>
                            </div>
                        )
                    } else if (content.type === 'image') {
                        return (
                            <img key={`${slug}-image-${index}`} src={`../images/adventures/${content.src}`} alt={content.alt} className="adventure-sub-img" loading="lazy"/>
                        )
                    } else {
                        return null;
                    }
                })}
                </div>
            </div>
        </div>
    )
}

export default AdventurePost;