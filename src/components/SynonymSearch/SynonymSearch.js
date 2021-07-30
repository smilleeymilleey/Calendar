import React, { useState }from 'react'
import "./SynonymSearch.css"
import { getSynonym } from "../../API"
import SynonymCard from "../SynonymCard/SynonymCard"

function SynonymSearch() {

  const [ input, setInput] = useState()
  const [ synonym, setSynonym] = useState()

  async function callSynonym(){
    let result = await getSynonym(input)
    setSynonym(result[0])
  }
  
    return (
    <>
        <div className="synonymSearch">
          <input className="searchBar" placeholder="search" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={() => callSynonym()} className="button">Submit</button>  
        </div>

       
        
          {
            

          <SynonymCard similarwords={synonym}/>
          }


        
      
    </>
    )
}

export default SynonymSearch
