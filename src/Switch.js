import {
	Switch,
	Route
} from "react-router-dom";
import Home from "./home/Home.js"
import Chars from "./chars/Chars.js"
import Login from "./login/Login.js"
import Help from "./help/Help.js"
import {UserContext} from "./context/Context.js"
import { useContext } from "react";

function Switcher() {

	const { user, setUser } = useContext(UserContext)

	if (!user)
	{
		return (
			<Switch>
				<Route path="/help" exact={true}>
					<Help />
				</Route>

				<Route path="/login" exact={true}>
					<Login />
				</Route>
				
				<Route path="/" exact={true}>
					<Login />
				</Route>
			</Switch>
		);
	}

	return (
		<Switch>
			<Route path="/chars" exact={true}>
				<Chars />
			</Route>
			
			<Route path="/help" exact={true}>
				<Help />
			</Route>

			<Route path="/" exact={true}>
				<Home />
			</Route>
			
		</Switch>
	);
}

export default Switcher;