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

        const NeedworkSlugs = [
            'the-uk-0824',
            'albania-1223',
            'hungary-0323',
            'slovakia-0323',
            'austria-0323',
            'czechia-0323'
        ];

        const linkPath = NeedworkSlugs.includes(this.props.slug) 
            ? "/notes" // Redirect to the "Still Working" page
            : `/experience/${this.props.slug}`; // Redirect to the actual experience post


        return (
            <div className="experience-container">
                <div className="experience-entry-block">
                    <Link to={linkPath}>
                        <img className="experience-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="experience-caption">{this.props.caption}</div>
                        <div className="experience-when" style={whenStyle}>{this.props.date}</div>
                        <div className="experience-description" style={locationStyle}>{this.props.location}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ExperienceEntry;