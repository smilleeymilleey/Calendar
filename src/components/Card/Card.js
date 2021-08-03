import React, { useState } from 'react'
import Modal from'react-modal';
import "./card.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


function Card({ nodef, results }) {
    console.log(results)
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
<<<<<<< HEAD
                    <p className="title is-4">{results?.entry} {nodef}</p>
                    {/* if AUDIO IS AVAILABLE- A MODAL WILL OPEN WITH AUDIO CLIP */}
                     {
                        results?.pronunciations[0].audio?.url && 
                        <button id="myBtn" onClick={setModalOpenToTrue} href={results?.pronunciations[0].audio.url}>
=======
                    <p className="title is-4">{word.entry } { pro.pronunciations[0].transcriptions[0].transcription}
                   
                    {/* if AUDIO URL IS AVAILABLE- A MODAL WILL OPEN WITH LINK TO AUDIO CLIP */}
                     {
                      sound.pronunciations[0].audio?.url && 
                        <button 
                            id="myBtn" 
                            onClick={setModalOpenToTrue} 
                            href={sound.pronunciations[0].audio.url}>
                            
>>>>>>> parent of e77328f (fixed bug and definitions show up again)
                            <EmojiObjectsIcon id="sound"/> 
                        </button>  
                      } 
                    </p> 
                     <Modal className="modalCard" isOpen={modalOpen}>
                            <audio id="autoplay" autoplay controls src={sound.pronunciations[0].audio.url}></audio>
                         <button onClick={setModalOpenToFalse}>X</button>
                         {/* embed audio link here */}
                     </Modal>
<<<<<<< HEAD

                    <p>{results?.pronunciations[0].transcriptions[0].transcription}</p>
=======
                    {/* END OF MODAL */}
                  
>>>>>>> parent of e77328f (fixed bug and definitions show up again)
                    <hr></hr>
                    <p id="speech" className="subtitle is-6">{results?.lexemes[0].partOfSpeech}</p>
                    <div className="content">
                        <p className="subtitle is-6">{results?.lexemes[0].senses[0].definition}</p>
                    </div>
                </div>
                </div>
            </div>
            </div>  
        </div>
    )
}

export default Card
