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

    function ifResults(){
      if(!results) {
          return <Card err="no results"></Card>
        }else {
          return <Card results={results}></Card>
      }
    }

    return (
    
            <div className="search">
                <input className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="searchBtn" onClick={()=> callApi(search)}>Search</button>

              {ifResults()}
            </div> 
      
        )
}

export default DefinitionSearchBar
