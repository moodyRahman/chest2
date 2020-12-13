
import { AppBar, Tab, Tabs } from "@material-ui/core"
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { TabContext, UserContext } from "./context/Context";
import { useContext } from "react"

function Nav() {

	const { user, setUser } = useContext(UserContext)
	const { tab, setTab } = useContext(TabContext)

	const handleChange = (event, newValue) => {
		setTab(newValue);
	};

	if (!user) {
		return (
			<AppBar position="static">
				<Tabs value={tab} onChange={handleChange}>
					<Tab index={0} label="Login" to="/login" component={Link} />
					<Tab index={1} label="Register" to="/register" component={Link} />
					<Tab index={2} label="Help" to="/help" component={Link} />
				</Tabs>
			</AppBar>
		)
	}

	return (

		<AppBar position="static">
			<Tabs value={tab} onChange={handleChange}>
				<Tab index={0} label="Home" to="/" component={Link} />
				<Tab index={1} label="Character" to="/chars" component={Link} />

				<Tab index={2} label="globaltest" onClick={(e) => { setUser(user + "a") }} />

				<Tab index={3} label={user} />
			</Tabs>
		</AppBar>
	)



	// </TabContext.provider>
}

export default Nav;