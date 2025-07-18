// ThinklabEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class ThinklabEntry extends React.Component {

    render() {
        // Use the correct image path for thinklab images
        const image_path = "../images/philosophy/" + this.props.src; // (keep path if images are still in philosophy folder)

        // Dynamic inline style for location color
        const locationStyle = {
            color: this.props.locationColor || "#043fac", // Default to blue if color is not provided
            textShadow: `0.75px 0.75px 1.5px ${this.props.locationColor || "#043fac"}`
        };

        const whenStyle = {
            backgroundColor: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        // Use a green background for the date, matching adventure widgets
        const dateStyle = {
            backgroundColor: this.props.dateColor || '#1ca100',
            borderRadius: '12%'
        };

        // Always link to the post's slug
        const linkPath = `/thinklab/${this.props.slug}`;

        const { caption, caption_zh, description, description_zh, when, when_zh, selectedLanguage } = this.props;
        const displayCaption = selectedLanguage === '中文' && caption_zh ? caption_zh : caption;
        const displayDescription = selectedLanguage === '中文' && description_zh ? description_zh : description;
        const displayWhen = selectedLanguage === '中文' && when_zh ? when_zh : when;

        return (
            <div className="philosophy-container">
                <div className="philosophy-entry-block">
                    <Link to={linkPath}>
                        <img className="philosophy-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="philosophy-date" style={dateStyle}>{this.props.date}</div>
                        <div className="philosophy-caption">{displayCaption}</div>
                        <div className="philosophy-when" style={whenStyle}>{displayWhen}</div>
                        <div className="philosophy-description" style={locationStyle}>{displayDescription}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ThinklabEntry; 