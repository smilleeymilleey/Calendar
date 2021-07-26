import React, { useState, useEffect } from 'react'
import getData from "../../API.js"
import "./SearchBar.css"

function SearchBar() {
    const [ search, setSearch ] = useState()

    function getSearchValue(e) {
        let searchValue=e.target.value
        console.log(searchValue)
    }
    return (
        <div>
            <div className="search">
                <input placeholder="search" value = {search} onChange={getSearchValue}/>
                <button onClick={()=> getData()}>button</button>
            </div> 
        </div>
)
}

export default SearchBar
