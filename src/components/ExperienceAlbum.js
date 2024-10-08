// ExperienceAlbum.js
import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import entries from './data/experience-entries';

class ExperienceAlbum extends React.Component {

    render() {

        return (
            <div className= "flex-container">
            {
                entries.itemlist.map((experience) => {
                    return <experienceEntry 
                    key={experience.src} 
                    src={experience.src} 
                    logo={experience.logo} 
                    when={experience.when}
                    whencolor={experience.whenColor} 
                    slug={experience.slug}
                    description={experience.description}/>
                })
            }
            </div>
        )
    }
}

export default ExperienceAlbum;