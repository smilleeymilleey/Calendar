import React, { useState } from 'react'
import SearchBar from "../SearchBar.js/SearchBar.js"
import Card from "../Card/Card.js"
import "./sidebar.css"
import getData from "../../API"



function Sidebar(props) {
    const [ search, setSearch ] = useState()
    const [ results, setResults ] = useState()
    
    async function callApi() {
        let res = await getData(search)
        setResults(res)
    }

    return (  
        <>
        <div className="columns">
            <div className="column is-2">
                <button id="dictionary" className="sideBtn">Dictionary</button>
                <button id="definition" className="sideBtn">Definitions</button>
                <div className="sideBarItem">
                    <button className="sideBtn">Synonyms</button>
                </div>
                <div className="sideBarItem">
                    <button className="sideBtn">Antonyms</button>
                </div>
                <div className="sideBarItem">
                    <button className="sideBtn">Rhymes</button>
                </div>
            </div>
        <div id="searchColumn" className="column">
            <SearchBar search={search} setSearch={setSearch} callApi={callApi} /> 
            {results && <Card word={results} definition={results}/> }
        </div>
        </div>
        </>
    )
}

export default Sidebar
