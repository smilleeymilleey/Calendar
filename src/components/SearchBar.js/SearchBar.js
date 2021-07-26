import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar({search , setSearch, callApi}) {
    

    return (
        <div>
            <div className="search">
                <input placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button onClick={()=> callApi()}>button</button>
            </div> 
        </div>
)
}

export default SearchBar
