import React, { useState }from 'react'
import Card from "../Card/Card"
import { getData } from "../../API"
import "./SearchBar.css"

function DefinitionSearchBar() {

    const [ search, setSearch ] = useState()
    const [ results, setResults ] = useState()

    
    async function callApi(search) {
        let res = await getData(search)
        console.log("res", res)
        setResults(res)
    }

    return (
    
            <div className="search">
                <input className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
<<<<<<< HEAD
                <button className="searchBtn" onClick={()=> callApi(search)}>Search</button>
 
                {results &&
                 <Card results={results}/> 
=======
                <button className="searchBtn" onClick={()=> callApi()}>Search</button>

                {results && 
                 <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> 
>>>>>>> parent of e77328f (fixed bug and definitions show up again)
                }
            </div> 
      
        )
}

export default DefinitionSearchBar
