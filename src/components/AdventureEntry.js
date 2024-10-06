// AdventureEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class AdventureEntry extends React.Component {

    render() {
        const image_path = "../images/adventures/" + this.props.src;

        // Dynamic inline style for location color
        const locationStyle = {
            color: this.props.locationColor || "#043fac" // Default to blue if color is not provided
        };

        return (
            <div className="adventure-container">
                <div className="adventure-entry-block">
                    <Link to={`/adventures/${this.props.slug}`}>
                        <img className="adventure-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="adventure-caption">{this.props.caption}</div>
                        <div className="adventure-date">{this.props.date}</div>
                        <div className="adventure-location" style={locationStyle}>{this.props.location}</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdventureEntry;