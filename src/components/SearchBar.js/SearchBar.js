import React, { useState, useEffect } from 'react'
import getData from "../../API.js"
import "./SearchBar.css"

function SearchBar() {
    const [ search, setSearch ] = useState()

    return (
        <div>
            <div className="search">
                <input placeholder="search" value = {search} onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={()=> getData(search)}>button</button>
            </div> 
        </div>
)
}

export default SearchBar
