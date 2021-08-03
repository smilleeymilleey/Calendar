import React from 'react'
import RhymeCard from '../RhymeCard/RhymeCard'
import "./RhymeSearch.css"

function RhymeSearch() {
    return (
    <div className="containerRhyme">
        <div className="searchRhymeContainer">
            <input id="searchRhyme"placeholder="search rhyme" />
            <button id="sub">Submit</button>
        </div>
        <div>
            <RhymeCard></RhymeCard>
        </div>
    </div>
    )
}

export default RhymeSearch
