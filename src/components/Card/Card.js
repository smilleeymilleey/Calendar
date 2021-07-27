import React from 'react'
import "./card.css"




function Card({ word, definition, partSpeech}) {
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
                    <hr></hr>
                    <p className="subtitle is-6">{partSpeech.lexemes[0].partOfSpeech}</p>
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
