// add the value of the search input in a variable where the word example is in the query string



// import "./components/SearchBar.js/SearchBar"


 function getData(word) {
    fetch(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "29d4921783mshda62aef3167eaf2p1b6114jsne3856612f90d",
            "x-rapidapi-host": "lingua-robot.p.rapidapi.com"
        }
    })
    
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}

export default getData













