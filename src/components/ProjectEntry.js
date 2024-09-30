// components/ProjectEntry.js
import React from 'react';
import './master.css';
import './projects.css';

class ProjectEntry extends React.Component {

  render() {

    const image_path = "../images/projects/" + this.props.src;

    return <div className="project-container">
    <div className="project-entry-block">
        <a href = {image_path}>
        <img className="project-img" src={image_path} alt={image_path} loading="lazy"/>
        {/* <img className="photo-frame" src="../images/adventures/frame.png" alt="../images/adventures/frame.png"/> */}
        <div className="project-caption">{this.props.caption}</div>
        <div className="project-genre">{this.props.genre}</div>
        {/* <div className="photo-location">{this.props.location}</div> */}

        </a>
      </div>
      </div>
  }
}

export default ProjectEntry;