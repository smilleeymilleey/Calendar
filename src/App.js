
import './App.css';
import getData from "./API"

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={()=> getData}></button>
    </div>
  );
}

export default App;
