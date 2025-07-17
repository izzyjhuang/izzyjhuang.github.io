// ProjectPost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/project-entries'
import './projects.css'

const ProjectPost = ({ selectedLanguage = 'English' }) => {
    const { slug } = useParams()

    // Find the corresponding project entry by its slug
    const project = entries.itemlist.find(entry => entry.slug === slug)

    if (!project) {
        return <div>project not found</div>
    }

    const displayCaption = selectedLanguage === '中文' && project.caption_zh ? project.caption_zh : project.caption;
    const displaySummary = selectedLanguage === '中文' && project.summary_zh ? project.summary_zh : project.summary;
    const displayGenre = selectedLanguage === '中文' && project.genre_zh ? project.genre_zh : project.genre;
    const displayDate = selectedLanguage === '中文' && project.date_zh ? project.date_zh : project.date;

    return (
        <div className="project-post">
            <img className="project-banner" src={`../images/projects/${project.banner}`} alt={displayCaption}  loading="lazy"/>
            <div className="project-poster">
                <h2 className="project-post-genre">{displayGenre}</h2>
                <h1 className="project-post-caption">{displayCaption}</h1>
                <h3 className="project-dates">{displayDate}</h3>
                {displaySummary && <div className="project-summary">{displaySummary}</div>}
                <div className="project-blog-content">
                {/* Loop through the blog content and render paragraphs and images */}
                {project.blogPost && project.blogPost.map((content, index) => {
                    if (content.type === 'paragraph') {
                        const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                        return (
                            <div className="paragraph" key={`${slug}-paragraph-${index}`}>
                                <p>{displayText}</p>
                            </div>
                        )
                    } else if (content.type === 'images-3') {
                        return (
                            <div className="images-3" key={`${slug}-images3-${index}`}>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src1}`} alt={content.alt1} loading="lazy"/>
                                    <h5>{content.alt1}</h5>
                                </div>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src2}`} alt={content.alt2} loading="lazy"/>
                                    <h5>{content.alt2}</h5>
                                </div>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src3}`} alt={content.alt3} loading="lazy"/>
                                    <h5>{content.alt3}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'images-2') {
                        return (
                            <div className="images-2" key={`${slug}-images2-${index}`}>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src1}`} alt={content.alt1} loading="lazy"/>
                                    <h5>{content.alt1}</h5>
                                </div>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src2}`} alt={content.alt2} loading="lazy"/>
                                    <h5>{content.alt2}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'image-left') {
                        const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                        const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                        return (
                            <div className="image-left" key={`${slug}-imageleft-${index}`}>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src}`} alt={displayAlt} loading="lazy"/>
                                    <h5>{displayAlt}</h5>
                                </div>
                                <p>{displayText}</p>
                            </div>
                        )
                    } else if (content.type === 'image-right') {
                        const displayText = selectedLanguage === '中文' && content.text_zh ? content.text_zh : content.text;
                        const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                        return (
                            <div className="image-right" key={`${slug}-imageright-${index}`}>
                                <p>{displayText}</p>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src}`} alt={displayAlt} loading="lazy"/>
                                    <h5>{displayAlt}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'image') {
                        const displayAlt = selectedLanguage === '中文' && content.alt_zh ? content.alt_zh : content.alt;
                        return (
                            <img key={`${slug}-image-${index}`} src={`../images/projects/${content.src}`} alt={displayAlt} className="project-sub-img" loading="lazy"/>
                        )
                    } else {
                        return null
                    }
                })}
            </div>
            </div>
            
        </div>
    )
}

export default ProjectPost;