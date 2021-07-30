import React from 'react'
import Dictionary from '../Dictionary/Dictionary';
import "./sidebar.css"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


function Sidebar() {
    // const [ search, setSearch ] = useState()
    // const [ results, setResults ] = useState()

    // async function callApi() {
    //     let res = await getData(search)
    //     setResults(res)
    // }

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
          sidebar: () => <Dictionary></Dictionary>,
          main: () => <h2>Definitions</h2>
        }
      ];


    return (  
        <>
        <Router>
            <div className="columns">
                    <div id="sidebar" className="column is-one-fifth">
                      
                      <Link to="/definitions">
                        <button id="definition" className="sideBtn">Definitions</button>     
                      </Link>
                      <Link to="/synonyms">
                            <button className="sideBtn">Synonyms</button>
                      </Link>
                            <button className="sideBtn">Rhymes</button>
                    </div>
                    <div id="content" className="column is-four-fifth">
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
                </div>

            {/* 1. move this to a new component called DefinitionSearchbar 
                2. import to top of definition page */}
        
                {/* <SearchBar search={search} setSearch={setSearch} callApi={callApi} /> 
                {results && <Card word={results} pro={results} definition={results} sound={results} partSpeech={results}/> } */}
           
            </div>
        </Router>
        </>
    )
}

export default Sidebar
