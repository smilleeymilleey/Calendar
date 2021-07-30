import React, { useState }from 'react'
import Card from "../Card/Card"
import getData from "../../API"
import "./SearchBar.css"

function DefinitionSearchBar() {

    const [ search, setSearch ] = useState()
    const [ results, setResults ] = useState()

    async function callApi() {
        let res = await getData(search)
        setResults(res)
    }

    return (
    
            <div className="search">
                <input className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="searchBtn" onClick={()=> callApi()}>Search</button>

                {results && 
                 <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> 
                }
            </div> 
      
)
}

export default DefinitionSearchBar
