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
            : "/philosophy"; 

        const { caption, caption_zh, location, location_zh, selectedLanguage } = this.props;
        const displayCaption = selectedLanguage === '中文' && caption_zh ? caption_zh : caption;
        const displayLocation = selectedLanguage === '中文' && location_zh ? location_zh : location;


        return (
            <div className="adventure-container">
                <div className="adventure-entry-block">
                    <Link to={linkPath}>
                    {/* <div className="adventure-topblock"> */}
                        <img className="adventure-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="adventure-caption">{displayCaption}</div>
                    {/* </div>
                    <div className="adventure-bottomblock"> */}
                        <div className="adventure-date" style={dateStyle}>{this.props.date}</div>
                        <div className="adventure-location" style={locationStyle}>{displayLocation}</div>
                    {/* </div> */}
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdventureEntry;