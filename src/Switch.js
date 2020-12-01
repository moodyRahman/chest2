import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Home from "./home/Home.js"
import Chars from "./chars/Chars.js"

function Switcher() {
	return (
		<Switch>
			<Route path="/chars">
				{/* TODO: IMPLEMENT */}
				{/* <Chars /> */}
				<Chars />
			</Route>
			<Route path="/">
				{/* TODO: IMPLEMENT */}
				<Home />
			</Route>
		</Switch>
	);
}

export default Switcher;