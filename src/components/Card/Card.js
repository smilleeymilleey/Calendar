import React, { useState } from 'react'
import Modal from'react-modal';
import "./card.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


function Card({ word, definition, partSpeech, sound, pro }) {
    const [ modalOpen, setModalOpen] = useState(false)

    const setModalOpenToTrue =()=>{
        setModalOpen(true)
    }
    
    const setModalOpenToFalse =()=>{
        setModalOpen(false)
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
                    <p className="title is-4">{word.entry} </p>
                   
                     {
                        sound.pronunciations[0].audio?.url && 
                        <button id="myBtn"  onClick={setModalOpenToTrue} href={sound.pronunciations[0].audio.url}>
                            <EmojiObjectsIcon id="sound"/> 
                        </button>  
                      }  
                      <div id="myModal"  className="modal">
                                <h1>Content</h1>
                     </div>  
                     <Modal isOpen={modalOpen}>
                         <button onClick={setModalOpenToFalse}>X</button>
                     </Modal>
                   
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
