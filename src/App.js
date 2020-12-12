import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Switcher from "./Switch.js"
import { UserContext, TokenContext, TabContext } from "./context/Context.js"
import { useState } from 'react'
import Nav from "./Nav";

function App() {
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [tab, setTab] = useState(0);

  return (
    <Router>
    <TabContext.Provider value={{tab, setTab}}>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Nav />
          <Switcher />
        </UserContext.Provider>
      </TokenContext.Provider>
    </TabContext.Provider>
    </Router>
  );
}

export default App;
