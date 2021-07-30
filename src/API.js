// add the value of the search input in a variable where the word example is in the query string

// definition API

function getApi(){

 async function getData(word) {
    return fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
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

getData()
// synonym api 

function getSynonym(){
    return fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/happy')
    .then(response => response.json())
    .then(data => console.log(data));
}

getSynonym()





}
export default getApi()