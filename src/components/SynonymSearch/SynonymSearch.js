import React, { useState }from 'react'
import "./SynonymSearch.css"
import { getSynonym } from "../../API"
import SynonymCard from "../SynonymCard/SynonymCard"

function SynonymSearch(props) {

  const [ input, setInput] = useState()
  const [ synonym, setSynonym] = useState([])

  async function callSynonym(){
    let result = await getSynonym(input)
    setSynonym(result[0]?.meanings[1]?.definitions[0].synonyms || [])
  }
  
    return (
    <div className="synonymContainer">
        <div className="synonymSearch">
          <input className="searchBar" placeholder="search" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={() => callSynonym()} className="button">Submit</button>  
        </div>

      {synonym.map((sword) => 
        <SynonymCard similarwords={sword}/>
      )
      }
       
    </div>
  )
}

export default SynonymSearch
