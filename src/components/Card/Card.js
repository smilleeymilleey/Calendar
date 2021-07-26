import React from 'react'
import "./card.css"




function Card({ word, definition }) {
    return (
        <div>
            <div class="card">
            <div class="card-image">
            </div>
            <div class="card-content">
                <div class="media">
                <div class="media-left">
                </div>
                <div class="media-content">
                    <p class="title is-4">{word.entry}</p>
                 
                </div>
                </div>
                <div class="content">
                    <p class="subtitle is-6">{definition.lexemes[0].senses[0].definition}</p>
                <br></br>
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card
