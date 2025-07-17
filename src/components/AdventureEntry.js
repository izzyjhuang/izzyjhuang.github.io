// AdventureEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class AdventureEntry extends React.Component {

    render() {
        const image_path = "../images/adventures/" + this.props.src;

        // Dynamic inline style for location color
        const locationStyle = {
            color: this.props.locationColor || "#043fac", // Default to blue if color is not provided
            textShadow: `0.75px 0.75px 1.5px ${this.props.locationColor || "#043fac"}`
        };
        const dateStyle = {
            backgroundColor: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        const CompletedSlugs = [
            'hvolsvollur-0824',
            'albania-1223',
            'hungary-0323',
            'slovakia-0323',
            'austria-0323',
            'czechia-0323'
        ];

        const linkPath = CompletedSlugs.includes(this.props.slug) 
            ? `/adventures/${this.props.slug}` 
            : "/notes"; 


        return (
            <div className="adventure-entry__container">
                <div className="adventure-entry__block">
                    <Link to={linkPath}>
                        <img className="adventure-entry__image" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="adventure-entry__caption">{this.props.caption}</div>
                        <div className="adventure-entry__date" style={dateStyle}>{this.props.date}</div>
                        <div className="adventure-entry__location" style={locationStyle}>{this.props.location}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdventureEntry;