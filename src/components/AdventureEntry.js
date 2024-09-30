// AdventureEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

class AdventureEntry extends React.Component {

    render() {

        const image_path = "../images/adventures/" + this.props.src;

        return <div className="adventure-container">
            <div className="adventure-entry-block" >
                <Link to={`/adventures/${this.props.slug}`}>
                    {/* <img className="adventure-frame" src="../images/adventures/frame.png" alt="../images/adventures/frame.png"/> */}
                    <img className="adventure-img" src={image_path} alt={image_path} loading="lazy"/>
                    <div className="adventure-caption">{this.props.caption}</div>
                    <div className="adventure-date">{this.props.date}</div>
                    <div className="adventure-location">{this.props.location}</div>
                    {/* <Link to={`/adventures/${this.props.slug}`}>Read More</Link> */}
                </Link>
            </div>
            </div>
    }
}

export default AdventureEntry;