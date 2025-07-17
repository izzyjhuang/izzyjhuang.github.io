// AdventureAlbum.js
import React from 'react';
import AdventureEntry from './AdventureEntry';
import entries from './data/adventure-entries';

class AdventureAlbum extends React.Component {

    render() {

        return (
            <div className= "flex-container">
            {
                entries.itemlist.map((adventure) => {
                    return <AdventureEntry 
                    key={adventure.src} 
                    src={adventure.src} 
                    location={adventure.location} 
                    location_zh={adventure.location_zh}
                    locationColor={adventure.locationColor}
                    date={adventure.date} 
                    caption={adventure.caption} 
                    caption_zh={adventure.caption_zh}
                    slug={adventure.slug}
                    genre={adventure.genre}
                    title={adventure.title}
                    dates={adventure.dates}
                    selectedLanguage={this.props.selectedLanguage}
                    />
                })
            }
            </div>
        )
    }
}

export default AdventureAlbum;