import React, { useState } from 'react'
import SearchBar from "../SearchBar/SearchBar.js"
import Synonym from '../Synonym/Synonym.js'
import Card from "../Card/Card.js"
import "./sidebar.css"
import getData from "../../API"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Sidebar() {
    const [ search, setSearch ] = useState()
    const [ results, setResults ] = useState()

    async function callApi() {
        let res = await getData(search)
        setResults(res)
    }

    const routes = [
        {
          path: "/",
          exact: true,
          sidebar: () => <div>Home!</div>,
          main: () => <h2>Home</h2>
        },
        {
          path: "/synonyms",
          sidebar: () => <div>Synonyms!</div>,
          main: () => <h2>Synonyms</h2>
        },
        {
          path: "/definitions",
          sidebar: () => <div>Definitions!</div>,
          main: () => <h2>Definitions</h2>
        }
      ];


    return (  
        <>
        <Router>
            <div className="columns">
                    <div className="column is-2">
                        <button id="dictionary">Dictionary</button>
                      <Link to="/definitions">
                        <button id="definition" className="sideBtn">Definitions</button>     
                      </Link>
                      <Link to="/synonyms">
                        <div className="sideBarItem">
                            <button className="sideBtn">Synonyms</button>
                        </div>
                      </Link>
                        <div className="sideBarItem">
                            <button className="sideBtn">Rhymes</button>
                        </div>
                    </div>
                <Switch>
                 {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact} 
                        children={<route.sidebar />}     
                    />
                    ))}  
                </Switch>

            {/* 1. move this to a new component called definitionSearchbar 
                2. import to top of definition page */}
            <div id="searchColumn" className="column">
                <SearchBar search={search} setSearch={setSearch} callApi={callApi} /> 
                {results && <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> }
            </div>
            </div>
        </Router>
        </>
    )
}

export default Sidebar
