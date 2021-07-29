import React from 'react'
import "./SearchBar.css"

function SearchBar({search , setSearch, callApi}) {
    return (
        <div>
            <div className="search">
                <input className="searchBar" placeholder="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button className="searchBtn" onClick={()=> callApi()}>Search</button>
            </div> 
        </div>
)
}

export default SearchBar
