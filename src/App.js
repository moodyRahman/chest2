import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Switcher from "./Switch.js"
import {UserContext} from "./context/Context.js"
import { useState } from 'react'

function App() {
  const [data, setData] = useState("helloooo");
  return (
    <Router>
    <UserContext.Provider value={{data, setData}}>
      <Switcher />
    </UserContext.Provider>
    </Router>
  );
}

export default App;
