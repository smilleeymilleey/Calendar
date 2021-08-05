import React from 'react'
import './RhymeCard.css'


function RhymeCard({ rhmeWord }) {
    return (
        <div className="rhymeContainer">
        <header className="card-header">
            <p className="card-header-title">
              {JSON.stringify(rhmeWord.word)}
            </p>
            <button className="card-header-icon" aria-label="more options">
            <span className="icon">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
    </div>
    )
}

export default RhymeCard
