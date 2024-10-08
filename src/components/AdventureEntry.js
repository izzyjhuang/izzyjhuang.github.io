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
        const dateStyle = {
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
            : `/adventures/${this.props.slug}`; // Redirect to the actual adventure post


        return (
            <div className="adventure-container">
                <div className="adventure-entry-block">
                    <Link to={linkPath}>
                    {/* <div className="adventure-topblock"> */}
                        <img className="adventure-img" src={image_path} alt={image_path} loading="lazy"/>
                        <div className="adventure-caption">{this.props.caption}</div>
                    {/* </div>
                    <div className="adventure-bottomblock"> */}
                        <div className="adventure-date" style={dateStyle}>{this.props.date}</div>
                        <div className="adventure-location" style={locationStyle}>{this.props.location}</div>
                    {/* </div> */}
                    </Link>
                </div>
            </div>
        );
    }
}

export default AdventureEntry;