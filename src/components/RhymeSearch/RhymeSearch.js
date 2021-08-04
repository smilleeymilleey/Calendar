import React, { useState }from 'react'
import RhymeCard from '../RhymeCard/RhymeCard'
import { getRhyme } from "../../API"



function RhymeSearch() {
    
  const [wordInput, setWordInput] = useState()
  const [rhymeResults, setRhymeResults] = useState()
  
  async function callRhyme(){
    let rhymeRes = await getRhyme(wordInput) 
    console.log("res", rhymeRes)
    setRhymeResults(rhymeRes || [])
    }
   
    return (
    <div className="containerRhyme">
        <div className="searchRhymeContainer">
            <input id="searchRhyme"placeholder="search rhyme" value={wordInput} onChange={(e) => setWordInput(e.target.value)}/>
            <button onClick={()=>callRhyme()} id="sub">Submit</button>
        </div>
        <div>
        {rhymeResults && rhymeResults.map((rhym) => 
           <RhymeCard rhmeWord={rhym}></RhymeCard>
          )  
        }
        </div>
    </div>
    )
}


export default RhymeSearch
