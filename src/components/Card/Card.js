import React, { useState } from 'react'
import Modal from'react-modal';
import "./card.css"
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';


function Card({ results, err }) {
    console.log(results)
    const [ modalOpen, setModalOpen] = useState(false)

    const setModalOpenToTrue =()=>{
        setModalOpen(true)
    }
    const setModalOpenToFalse =()=>{
        setModalOpen(false)
    }
    
    function ifEntry(err){
        let resEntry = results.entry 
        if (!results.entry) {
         return {err}
        }else{
        return resEntry
        }
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
                    <p className="title is-4">{ifEntry}</p>
                    <p>{results.pronunciations?[0].transcriptions[0].transcription:err}</p>
                   <p>
                    {/* if AUDIO URL IS AVAILABLE- A MODAL WILL OPEN WITH LINK TO AUDIO CLIP */}
                     {
                      results.pronunciations[0].audio?.url && 
                        <button 
                            id="myBtn" 
                            onClick={setModalOpenToTrue} 
                            href={results.pronunciations[0].audio.url}>
                            
                            <EmojiObjectsIcon id="sound"/> 
                        </button>  
                      } 
                    </p> 
                     <Modal className="modalCard" isOpen={modalOpen}>
                            <audio id="autoplay" autoplay controls src={results.pronunciations[0].audio.url}></audio>
                         <button onClick={setModalOpenToFalse}>X</button>
                         {/* embed audio link here */}
                     </Modal>
                    {/* END OF MODAL */}
                  
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
