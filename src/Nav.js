
import {AppBar, Toolbar, IconButton, Typography, Button, Tab, Tabs} from "@material-ui/core"
// import MenuIcon from '@material-ui/icons/Menu';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { UserContext } from "./context/Context";
import {useContext, useState} from "react"
function Nav() {
	const { data, setData } = useContext(UserContext)
	const {selectedTab, changeTab} = useState(0)
	function handleClick(e) {
		e.preventDefault();
		const temp = data
		console.log(data)
		// setData("globally tested")
	}

	return (
		<AppBar position="static">
			<Tabs value={0} >
				<Tab index={0} label="Home" to="/" component={Link} />
				<Tab index={0} label="Character" to="/chars" component={Link} />
				<Tab index={0} label="Login" to="/login" component={Link} />
				
				<Tab label="globaltest" onClick={handleClick} />
				
				<Tab label={data}/>
			</Tabs>
		</AppBar>
	)
}

export default Nav;