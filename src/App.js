import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Switcher from "./Switch.js"
import { UserContext, TokenContext } from "./context/Context.js"
import { useState } from 'react'
import Nav from "./Nav";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  return (
    <Router>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Nav />
          <Switcher />
        </UserContext.Provider>
      </TokenContext.Provider>
    </Router>
  );
}

export default App;
