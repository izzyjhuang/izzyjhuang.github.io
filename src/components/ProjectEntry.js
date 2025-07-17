// components/ProjectEntry.js
import React from 'react';
import { Link } from 'react-router-dom';

import './master.css';
import './projects.css';

class ProjectEntry extends React.Component {

  render() {

    const image_path = "../images/projects/" + this.props.src;

    const NeedworkSlugs = [
      'izzy-website',
      'izzy-app'
  ];

  const isExternal = this.props.slug.startsWith('http');

  const linkPath = (() => {
    if (isExternal) {
      return this.props.slug; // External link
    } else if (NeedworkSlugs.includes(this.props.slug)) {
      return "/notes"; // Redirect to the "Still Working" page
    } else if (this.props.slug.endsWith(".pdf")) {
      return `${process.env.PUBLIC_URL}/files/${this.props.slug}`; // Direct link to internal PDF file
    } else {
      return `${this.props.slug}`; // Redirect to internal blog post
    }
  })();

  const LinkComponent = isExternal || this.props.slug.endsWith(".pdf") ? "a" : Link;
const linkProps = isExternal || this.props.slug.endsWith(".pdf")
  ? { href: linkPath, rel: "noopener noreferrer" }
  : { to: linkPath };

  const { caption, caption_zh, summary, summary_zh, selectedLanguage } = this.props;
  const displayCaption = selectedLanguage === '中文' && caption_zh ? caption_zh : caption;
  const displaySummary = selectedLanguage === '中文' && summary_zh ? summary_zh : summary;

  return (
    <div className="project-container">
      <div className="project-entry-block">
        <LinkComponent {...linkProps}>
          <img className="project-img" src={image_path} alt={image_path} loading="lazy" />
          <div className="project-caption">{displayCaption}</div>
          <div className="project-genre">{this.props.genre}</div>
          {/* If you want to show summary somewhere, you can use displaySummary */}
        </LinkComponent>
      </div>
    </div>
  );
  }
}

export default ProjectEntry;