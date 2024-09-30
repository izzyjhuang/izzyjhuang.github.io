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
        <div className="adventure-post">
            <img className="adventure-banner" src={`../images/adventures/${adventure.banner}`} alt={adventure.caption}  loading="lazy"/>
            <div className="adventure-poster">
                <h2 className="adventure-genre">{adventure.genre}</h2>
                <h1 className="adventure-title">{adventure.title}</h1>
                <h3 className="adventure-dates">{adventure.dates}</h3>
                <div className="adventure-blog-content">
                {/* Loop through the blog content and render paragraphs and images */}
                {adventure.blogPost.map((content, index) => {
                    if (content.type === 'paragraph') {
                        return <div className="paragraph">
                            <h4 key={index}>{content.header}</h4>
                            <p key={index}>{content.text}</p>
                        </div>
                        
                    } else if (content.type === 'images-3') {
                        return <div className="images-3">
                            <div className="image-box">
                            <img src={`../images/adventures/${content.src1}`} alt={content.alt1} loading="lazy"/>
                            <h5>{content.alt1}</h5>
                            </div>
                            <div className="image-box">
                            <img src={`../images/adventures/${content.src2}`} alt={content.alt1} loading="lazy"/>
                            <h5>{content.alt2}</h5>
                            </div>
                            <div className="image-box">
                            <img src={`../images/adventures/${content.src3}`} alt={content.alt1} loading="lazy"/>
                            <h5>{content.alt3}</h5>
                            </div>
                        </div>
                    } else if (content.type === 'images-2') {
                        return <div className="images-2">
                            <img src={`../images/adventures/${content.src1}`} alt={content.alt1} loading="lazy"/>
                            <img src={`../images/adventures/${content.src2}`} alt={content.alt2} loading="lazy"/>
                            </div>
                    } else if (content.type === 'image') {
                        return <img key={index} src={`../images/adventures/${content.src}`} alt={content.alt} className="adventure-sub-img" loading="lazy"/>
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