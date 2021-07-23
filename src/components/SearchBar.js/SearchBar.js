import React from 'react'
import getData from "../../API.js"
import "./SearchBar.css"

function SearchBar() {
    return (
        <div>
            <div className="search">
                <input placeholder="search"/>
                <button onClick={()=> getData()}>button</button>
            </div> 
        </div>
    )
}

export default SearchBar
