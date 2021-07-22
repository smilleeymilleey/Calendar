
import getData from "./API"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <button onClick={()=> getData()}></button>
    </div>
  );
}

export default App;
