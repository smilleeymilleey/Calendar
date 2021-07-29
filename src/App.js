
import './App.css';
import Synonym from './components/Synonym/Synonym';
import Sidebar from "./components/Sidebar/Sidebar"
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';



function App() {
  return (
   <div>
    <Router>
     <Switch>
        <Route path="/">
            <Sidebar></Sidebar>
        </Route>
        <Route path="/synonym">
            <Synonym></Synonym>
        </Route>
     </Switch>
    </Router>
    </div>
    );
}

export default App;
