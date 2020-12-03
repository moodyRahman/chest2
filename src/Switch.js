import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from "./home/Home.js"
import Chars from "./chars/Chars.js"
import Login from "./login/Login.js"

function Switcher() {
	return (
		<Switch>
			<Route path="/chars">
				<Chars />
			</Route>

			<Route path="/login">
				<Login />
			</Route>
			
			<Route path="/">
				<Home />
			</Route>

			
		</Switch>
	);
}

export default Switcher;