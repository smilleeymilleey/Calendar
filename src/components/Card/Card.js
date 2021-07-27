import React, { useState } from 'react'
import "./card.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


function Card({ word, definition, partSpeech, sound, pro }) {
    const [ modal, setModal] = useState()

        

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
                    <p className="title is-4">{word.entry}
                   
                     {
                        sound.pronunciations[0].audio?.url && 
                        <button id="myBtn" href={sound.pronunciations[0].audio.url}>
                            <EmojiObjectsIcon id="sound"/> 
                        </button>  
                      }  
                      <div id="myModal" onClick={() => modal.style.display = "block"} className="modal">
                                Modal content 
                        <div className="modal-content">
                            <span className="close">&times;</span>
                            <p>Some text in the Modal..</p>
                        </div>
                        </div>   
                    </p>
                    <p>{pro.pronunciations[0].transcriptions[0].transcription}</p>
                    <hr></hr>
                    <p id="speech" className="subtitle is-6">{partSpeech.lexemes[0].partOfSpeech}</p>
                    <div className="content">
                        <p className="subtitle is-6">{definition.lexemes[0].senses[0].definition}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Card
