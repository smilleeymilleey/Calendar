import React from 'react'
import SearchBar from "../SearchBar.js/SearchBar.js"
import Card from "../Card/Card.js"
import "./sidebar.css"



function Sidebar() {
    return (  
        <>
        <div className="columns">
            <div className="column is-2">
                <button>Definitions</button>
                <div className="sideBarItem">
                    <button>Synonyms</button>
                </div>
                <div className="sideBarItem">
                    <button>Antonyms</button>
                </div>
                <div className="sideBarItem">
                    <button>Rhymes</button>
                </div>
            </div>
        <div id="searchColumn" className="column">
            <SearchBar /> 
            <Card />
        </div>
        </div>
        </>
    )
}

export default Sidebar
