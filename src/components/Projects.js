// components/Projects.js
import React from 'react';
import ProjectAlbum from './ProjectAlbum';
import './master.css';


const Projects = () => {
    return (
        <div>
            {/* <div className="page-warmer">
                <img className="page-photo" src="../images/skydive-moab.png" alt="../images/skydive-moab.png"/>
                <h1 className="page-text">I recently checked off skydiving from my bucket list, I'll be visiting the Hobbiton in New Zealand soon!</h1>
              </div> */}
          <ProjectAlbum/>
        </div>
      );
};

export default Projects;