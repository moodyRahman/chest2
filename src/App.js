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

function App() {
  const [data, setData] = useState("helloooo");
  const [tab, setTab] = useState(0)
  return (
    <Router>
    <UserContext.Provider value={{data, setData}}>
    <TabContext.Provider value={{tab, setTab}}>
      <Switcher />
    </TabContext.Provider>
    </UserContext.Provider>
    </Router>
  );
}

export default App;
