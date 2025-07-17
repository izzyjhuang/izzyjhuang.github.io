// ExperienceEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class ExperienceEntry extends React.Component {

    render() {
        const image_path = "../images/experience/" + this.props.src;

        // Dynamic inline style for location color
        const locationStyle = {
            color: this.props.locationColor || "#043fac", // Default to blue if color is not provided
            textShadow: `0.75px 0.75px 1.5px ${this.props.locationColor || "#043fac"}`
        };

        const whenStyle = {
            backgroundColor: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        const CompletedSlugs = [];

        const linkPath = CompletedSlugs.includes(this.props.slug) 
            ? `/experience/${this.props.slug}` 
            : "/notes"; 

        const { caption, caption_zh, description, description_zh, selectedLanguage } = this.props;
        const displayCaption = selectedLanguage === '中文' && caption_zh ? caption_zh : caption;
        const displayDescription = selectedLanguage === '中文' && description_zh ? description_zh : description;


        return (
            <div className="experience-container">
                <div className="experience-entry-block">
                    <Link to={linkPath}>
                        <img className="experience-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="experience-caption">{displayCaption}</div>
                        <div className="experience-when" style={whenStyle}>{this.props.when}</div>
                        <div className="experience-description" style={locationStyle}>{displayDescription}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ExperienceEntry;