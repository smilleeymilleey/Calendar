import React from 'react'
import "./card.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';




function Card({ word, definition, partSpeech, sound }) {
    function isAudioAvailable( props ) {
        const isAudio = props.isAudio
        if (isAudio) {
            return 
            <EmojiObjectsIcon href={sound.pronunciations[0].audio.url}/>
        }
        return (
            <h1>No Audio Available</h1>
        )
    }



    return (
        <div>
            <div className="card">
            <div className="card-image">
            </div>
            <div className="card-content">
                <div className="media">
                <div className="media-left">
                </div>
                <div className="media-content">
                    <p className="title is-4">{word.entry}</p> 
                        {
                    
                    
                         sound.pronunciations[0].audio?.url &&
                               
                          <EmojiObjectsIcon href={sound.pronunciations[0].audio.url}/>
                            
                         
                            
                        } 
                    <hr></hr>
                    <p id="speech" className="subtitle is-6">{partSpeech.lexemes[0].partOfSpeech}</p>
                </div>
                </div>
                <div className="content">
                    <p className="subtitle is-6">{definition.lexemes[0].senses[0].definition}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
