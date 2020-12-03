
import {AppBar, Toolbar, IconButton, Typography, Button, Tab, Tabs} from "@material-ui/core"
// import MenuIcon from '@material-ui/icons/Menu';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { UserContext, TabContext } from "./context/Context";
import {useContext, useState} from "react"
function Nav() {
	const { data, setData } = useContext(UserContext)
	const {tab, setTab} = useContext(TabContext)
	const {selectedTab, changeTab} = useState(0)
	function handleClick(e) {
		e.preventDefault();
		const temp = data
		console.log(data)
		// setData("globally tested")
	}

	return (
		<TabContext.provider value={0}>
		<AppBar position="static">
			<Tabs value={4} >
				<Tab index={0} label="Home" to="/" component={Link} />
				<Tab index={1} label="Character" to="/chars" component={Link} />
				<Tab index={2} label="Login" to="/login" component={Link} />
				
				<Tab index={3} label="globaltest" onClick={handleClick} />
				
				<Tab index={4} label={data}/>
			</Tabs>
		</AppBar>
		</TabContext.provider>
	)
}

export default Nav;