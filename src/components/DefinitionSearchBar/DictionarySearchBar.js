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
                <button className="searchBtn" onClick={()=> callApi(search)}>Search</button>
 
                {results &&
                 <Card results={results}/> 
                }
            </div> 
      
        )
}

export default DefinitionSearchBar
