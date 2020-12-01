import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Switcher from "./Switch.js"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switcher />
    </Router>
  );
}

export default App;
