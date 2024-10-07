// components/ProjectEntry.js
import React from 'react';
import './master.css';
import './projects.css';

class ProjectEntry extends React.Component {

  render() {

    const image_path = "../images/projects/" + this.props.src;

    const NeedworkSlugs = [
      'the-duality-of-mouse',
      'izzyhuang.com',
      'neuronet',
      'the-clampanion'
  ];

  const isExternal = this.props.slug.startsWith('http');

    // Determine the correct linkPath
    const linkPath = isExternal
      ? this.props.slug // Use the slug directly for external links
      : NeedworkSlugs.includes(this.props.slug)
        ? "https://izzyjhuang.com/#/notes" // Redirect to the "Still Working" page
        : `/adventures/${this.props.slug}`; // Redirect to the internal adventure post

    return (
      <div className="project-container">
        <div className="project-entry-block">
          {/* Use <a> tag for both external and internal links */}
          <a href={linkPath} target={isExternal ? "_blank" : "_self"} rel="noopener noreferrer">
            <img className="project-img" src={image_path} alt={image_path} loading="lazy" />
            <div className="project-caption">{this.props.caption}</div>
            <div className="project-genre">{this.props.genre}</div>
          </a>
        </div>
      </div>
    );
  }
}

export default ProjectEntry;