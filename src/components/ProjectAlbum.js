// components/ProjectAlbum.js
import React from 'react';
import ProjectEntry from './ProjectEntry';
import entries from './data/project-entries';
import './master.css';
import './projects.css';

class ProjectAlbum extends React.Component {

    render() {

        return (
            <div className= "flex-container">
            {
                entries.itemlist.map((project) => {
                    return <ProjectEntry 
                    key={project.src} 
                    src={project.src} 
                    slug={project.slug} 
                    caption={project.caption} 
                    date={project.date} 
                    genre={project.genre} 
                    summary={project.summary}
                    banner={project.banner}/>
                })
            }
            </div>
        )
    }
};

export default ProjectAlbum;