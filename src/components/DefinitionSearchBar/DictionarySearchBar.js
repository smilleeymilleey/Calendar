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

    function checkDefinition(results){
        console.log(results)
        if(results){
            return <Card results={results}></Card> 
        } else {
            return <Card nodef="no definition"></Card>
        }
    }

    return (
    
            <div className="search">
                <input className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="searchBtn" onClick={()=> callApi()}>Search</button>

                {checkDefinition(results)}
            </div> 
      
)
}

export default DefinitionSearchBar
