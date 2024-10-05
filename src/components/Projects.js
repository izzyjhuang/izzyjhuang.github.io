// components/Projects.js
import React from 'react';
import ProjectAlbum from './ProjectAlbum';
import './master.css';

const Projects = ({ selectedLanguage }) => {
    return (
        <div>
          <ProjectAlbum selectedLanguage={selectedLanguage} />
        </div>
      );
};

export default Projects;