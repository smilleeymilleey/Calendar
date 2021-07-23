import React from 'react'
import SearchBar from "../SearchBar.js/SearchBar.js"
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
        <div className="column">
            <SearchBar /> 
        </div>
        </div>
        </>
    )
}

export default Sidebar
