import React from 'react'
import "../Synonym/Synonym.css"
import "../SynonymSearch/SynonymSearch"
import SynonymSearch from '../SynonymSearch/SynonymSearch'
import SynonymCard from '../SynonymCard/SynonymCard'

function Synonym() {
    return (
        <div>  
            <div>
                <SynonymSearch></SynonymSearch>
                <SynonymCard></SynonymCard>
            </div>
        </div>
    )
}

export default Synonym
