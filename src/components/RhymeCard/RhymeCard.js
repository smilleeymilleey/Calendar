import React from 'react'

function RhymeCard() {
    return (
        <div>
        <header className="card-header">
            <p className="card-header-title">
                Rhyme
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