
import './App.css';
import getData from "./API"
import Sidebar from "./components/Sidebar/Sidebar.js"

function App() {
  return (
    <div>
      <Sidebar>
      <div className="App">
        <h1>test</h1>
        <button onClick={()=> getData()}>button</button>
      </div>
      </Sidebar>
    </div>
    );
}

export default App;
