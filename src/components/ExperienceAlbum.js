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
                    return <ExperienceEntry 
                    key={experience.src} 
                    src={experience.src} 
                    logo={experience.logo} 
                    caption={experience.caption}
                    caption_zh={experience.caption_zh}
                    when={experience.when}
                    when_zh={experience.when_zh}
                    whencolor={experience.whenColor} 
                    slug={experience.slug}
                    description={experience.description}
                    description_zh={experience.description_zh}
                    selectedLanguage={this.props.selectedLanguage}
                    />
                })
            }
            </div>
        )
    }
}

export default ExperienceAlbum;