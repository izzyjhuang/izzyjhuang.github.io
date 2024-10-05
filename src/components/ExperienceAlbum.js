// ExperienceAlbum.js
import React from 'react';
import ExperienceEntry from './ExperienceEntry';
import entries from './data/Experience-entries';

class ExperienceAlbum extends React.Component {

    render() {

        return (
            <div className= "flex-container">
            {
                entries.itemlist.map((experience) => {
                    return <ExperienceEntry 
                    key={experience.src} 
                    src={experience.src} 
                    location={experience.location} 
                    date={experience.date} 
                    caption={experience.caption} 
                    slug={experience.slug}
                    genre={experience.genre}
                    title={experience.title}
                    dates={experience.dates}/>
                })
            }
            </div>
        )
    }
}

export default ExperienceAlbum;