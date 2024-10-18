// ProjectPost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/project-entries'
import './projects.css'

const ProjectPost = () => {
    const { slug } = useParams()

    // Find the corresponding project entry by its slug
    const project = entries.itemlist.find(entry => entry.slug === slug)

    if (!project) {
        return <div>project not found</div>
    }

    return (
        <div className="project-post">
            <img className="project-banner" src={`../images/projects/${project.banner}`} alt={project.caption}  loading="lazy"/>
            <div className="project-poster">
                <h2 className="project-post-genre">{project.genre}</h2>
                <h1 className="project-post-caption">{project.caption}</h1>
                <h3 className="project-dates">{project.date}</h3>
                <div className="project-blog-content">
                {/* Loop through the blog content and render paragraphs and images */}
                {project.blogPost.map((content, index) => {
                    if (content.type === 'paragraph') {
                        return (
                            <div className="paragraph" key={`${slug}-paragraph-${index}`}>
                                <h4>{content.header}</h4>
                                <p>{content.text}</p>
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
                        return (
                            <div className="image-left" key={`${slug}-imageleft-${index}`}>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src}`} alt={content.alt} loading="lazy"/>
                                    <h5>{content.alt}</h5>
                                </div>
                                <p>{content.text}</p>
                            </div>
                        )
                    } else if (content.type === 'image-right') {
                        return (
                            <div className="image-right" key={`${slug}-imageright-${index}`}>
                                <p>{content.text}</p>
                                <div className="image-box">
                                    <img src={`../images/projects/${content.src}`} alt={content.alt} loading="lazy"/>
                                    <h5>{content.alt}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'image') {
                        return (
                            <img key={`${slug}-image-${index}`} src={`../images/projects/${content.src}`} alt={content.alt} className="project-sub-img" loading="lazy"/>
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

export default ProjectPost