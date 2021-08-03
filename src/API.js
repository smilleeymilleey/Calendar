
// definition API
 export async function getData(search) {
    return fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${search}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "29d4921783mshda62aef3167eaf2p1b6114jsne3856612f90d",
            "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        let searchWord = data.entries[0]
        console.log(searchWord)
        return searchWord;

    })
    .catch((error) => {
        console.error('Error:', error);
    });      
}
// synonym api 
export async function getSynonym(input){
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/ ${input}`)
    .then(response => response.json())   
}

// rhyme api
export async function getRhyme(wordInput){
    console.log(wordInput)
    return fetch(`https://rhymebrain.com/talk?function=getRhymes&word=${wordInput}`)
    .then(response => response.json())
}
