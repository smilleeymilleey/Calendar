import React, { useState } from 'react'
import SearchBar from "../SearchBar.js/SearchBar.js"
import Card from "../Card/Card.js"
import "./sidebar.css"
import getData from "../../API"
// import { BrowserRouter, Switch, Route} from 'react-router';




function Sidebar() {
    const [ search, setSearch ] = useState()
    const [ results, setResults ] = useState()

    async function callApi() {
        let res = await getData(search)
        setResults(res)
    }
    return (  
        <>
        <div className="columns">
           {/* switch */}
                <div className="column is-2">
                    <button id="dictionary">Dictionary</button>
                    <button id="definition" className="sideBtn">Definitions</button>
                    <div className="sideBarItem">
                        <button className="sideBtn">Synonyms</button>
                    </div>
                    <div className="sideBarItem">
                        <button className="sideBtn">Rhymes</button>
                    </div>
                </div>
            {/* switch */}
        <div id="searchColumn" className="column">
            <SearchBar search={search} setSearch={setSearch} callApi={callApi} /> 
            {results && <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> }
        </div>
        </div>
        </>
    )
}

export default Sidebar
