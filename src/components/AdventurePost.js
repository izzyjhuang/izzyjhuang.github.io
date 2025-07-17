// AdventurePost.js
import React from 'react'
import { useParams } from 'react-router-dom'
import entries from './data/adventure-entries'
import './adventures.css'

const AdventurePost = () => {
    const { slug } = useParams()

    // Find the corresponding adventure entry by its slug
    const adventure = entries.itemlist.find(entry => entry.slug === slug)

    if (!adventure) {
        return <div>Adventure not found</div>
    }

    return (
        <div className="adventure-post__container">
            <img className="adventure-post__banner" src={`../images/adventures/${adventure.banner}`} alt={adventure.caption}  loading="lazy"/>
            <div className="adventure-post__content">
                <h2 className="adventure-post__genre">{adventure.genre}</h2>
                <h1 className="adventure-post__title">{adventure.title}</h1>
                <h3 className="adventure-post__dates">{adventure.dates}</h3>
                <div className="adventure-post__blog">
                {/* Loop through the blog content and render paragraphs and images */}
                {adventure.blogPost.map((content, index) => {
                    if (content.type === 'paragraph') {
                        return (
                            <div className="adventure-post__paragraph" key={`${slug}-paragraph-${index}`}>
                                <h4>{content.header}</h4>
                                <p>{content.text}</p>
                            </div>
                        )
                    } else if (content.type === 'images-3') {
                        return (
                            <div className="adventure-post__images-3" key={`${slug}-images3-${index}`}>
                                <div className="adventure-post__image-box">
                                    <img src={`../images/adventures/${content.src1}`} alt={content.alt1} loading="lazy"/>
                                    <h5>{content.alt1}</h5>
                                </div>
                                <div className="adventure-post__image-box">
                                    <img src={`../images/adventures/${content.src2}`} alt={content.alt2} loading="lazy"/>
                                    <h5>{content.alt2}</h5>
                                </div>
                                <div className="adventure-post__image-box">
                                    <img src={`../images/adventures/${content.src3}`} alt={content.alt3} loading="lazy"/>
                                    <h5>{content.alt3}</h5>
                                </div>
                            </div>
                        )
                    } else if (content.type === 'images-2') {
                        return (
                            <div className="adventure-post__images-2" key={`${slug}-images2-${index}`}>
                                <img src={`../images/adventures/${content.src1}`} alt={content.alt1} loading="lazy"/>
                                <img src={`../images/adventures/${content.src2}`} alt={content.alt2} loading="lazy"/>
                            </div>
                        )
                    } else if (content.type === 'image') {
                        return (
                            <img key={`${slug}-image-${index}`} src={`../images/adventures/${content.src}`} alt={content.alt} className="adventure-post__sub-img" loading="lazy"/>
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

export default AdventurePost