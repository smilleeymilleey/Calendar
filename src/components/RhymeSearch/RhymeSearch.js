import React, { useState }from 'react'
import RhymeCard from '../RhymeCard/RhymeCard'
import "./RhymeSearch.css"
import { getRhyme } from "../../API"



function RhymeSearch() {
    
    const [wordInput, setWordInput] = useState()
    const [rhymeResults, setRhymeResults] = useState()
    
    function checkRhyme(rhymeResults) {
        if (rhymeResults) {
            return <RhymeCard rhyme={rhymeResults}></RhymeCard>         
        } else {
            return <RhymeCard er="no rhymes"></RhymeCard>
        }
    }
   async function callRhyme(){
    let rhymeRes = await getRhyme(wordInput) 
    console.log("res", rhymeRes)
    setRhymeResults(rhymeRes)
    }
   
    return (
    <div className="containerRhyme">
        <div className="searchRhymeContainer">
            <input id="searchRhyme"placeholder="search rhyme" value={wordInput} onChange={(e) => setWordInput(e.target.value)}/>
            <button onClick={()=>callRhyme()} id="sub">Submit</button>
        </div>
        <div>
        {checkRhyme(rhymeResults)}
        </div>
    </div>
    )
}


export default RhymeSearch
