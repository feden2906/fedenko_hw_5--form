import './App.css';
import Header from "./components/header/Header";
import {BrowserRouter as Router} from "react-router-dom";
import Body from "./components/body/Body";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Body/>
        
      </Router>
    </div>
  );
}

export default App;
