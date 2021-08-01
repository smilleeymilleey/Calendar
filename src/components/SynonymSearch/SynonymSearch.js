import React, { useState }from 'react'
import "./SynonymSearch.css"
import { getSynonym } from "../../API"
import SynonymCard from "../SynonymCard/SynonymCard"

function checkError(synonym){
  if (synonym) {
    return synonym?.map((sword) => 
      <SynonymCard similarwords={sword}/>    
    )
  } else {
    return <SynonymCard error="no synonyms available"/>
  }

}

function SynonymSearch(props) {

  const [ input, setInput] = useState()
  const [ synonym, setSynonym] = useState()

  async function callSynonym(){
    let result = await getSynonym(input)
    setSynonym(result[0]?.meanings[1].definitions[0].synonyms)
  }
  
    return (
    <>
        <div className="synonymSearch">
          <input className="searchBar" placeholder="search" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={() => callSynonym()} className="button">Submit</button>  
        </div>
        {checkError(synonym)}  
    </>
  )
}

export default SynonymSearch
