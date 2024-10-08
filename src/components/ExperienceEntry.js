// ExperienceEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class ExperienceEntry extends React.Component {

    render() {
        const image_path = "../images/experience/" + this.props.src;

        // Dynamic inline style for location color
        const locationStyle = {
            color: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        const whenStyle = {
            backgroundColor: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        const CompletedSlugs = [];

        const linkPath = CompletedSlugs.includes(this.props.slug) 
            ? `/experience/${this.props.slug}` 
            : "/notes"; 


        return (
            <div className="experience-container">
                <div className="experience-entry-block">
                    <Link to={linkPath}>
                        <img className="experience-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="experience-caption">{this.props.caption}</div>
                        <div className="experience-when" style={whenStyle}>{this.props.when}</div>
                        <div className="experience-description" style={locationStyle}>{this.props.description}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ExperienceEntry;