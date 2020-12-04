import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Switcher from "./Switch.js"
import {UserContext, TabContext} from "./context/Context.js"
import { useState } from 'react'
import Nav from "./Nav";

function App() {
  const [user, setUser] = useState("anonymous");
  return (
    <Router>
    <UserContext.Provider value={{user, setUser}}>
      <Nav />
      <Switcher />
    </UserContext.Provider>
    </Router>
  );
}

export default App;
