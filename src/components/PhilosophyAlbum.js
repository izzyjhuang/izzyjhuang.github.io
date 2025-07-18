// ThinklabAlbum.js
import React from 'react';
import ThinklabEntry from './PhilosophyEntry';
import entries from './data/philosophy-entries';

class ThinklabAlbum extends React.Component {

    render() {

        return (
            <div className="philosophy-album-container">
            {
                entries.itemlist.map((philosophy) => {
                    return <ThinklabEntry 
                    key={philosophy.src} 
                    src={philosophy.src} 
                    logo={philosophy.logo} 
                    caption={philosophy.caption}
                    caption_zh={philosophy.caption_zh}
                    when={philosophy.when}
                    when_zh={philosophy.when_zh}
                    whencolor={philosophy.whenColor} 
                    slug={philosophy.slug}
                    description={philosophy.description}
                    description_zh={philosophy.description_zh}
                    date={philosophy.date}
                    selectedLanguage={this.props.selectedLanguage}
                    />
                })
            }
            </div>
        )
    }
}

export default ThinklabAlbum; 