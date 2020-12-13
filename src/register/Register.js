import Container from '@material-ui/core/Container';
import { UserContext, TokenContext, TabContext } from '../context/Context.js';
import { useContext, useState } from 'react';
import { Button } from '@material-ui/core';




function Register() {

	const [username, setUsername] = useState("");
	const [password0, setPassword0] = useState("");
	const [password1, setPassword1] = useState("");
	const [message, setMessage] = useState("");

	const { user, setUser } = useContext(UserContext)
	const { token, setToken } = useContext(TokenContext)
	const { tab, setTab } = useContext(TabContext);


	const registerVerify = (event) => {
		event.preventDefault();
		


	}

	const register = (event) => {
		event.preventDefault();
		const data = {
			"username": username,
			"password": password0
		}

		fetch("http://localhost:5000/register", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		})
			.then(res => res.json())
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					setToken(response.token)
					setUser(response.user)
					setTab(0)
				}
			})
	}


	return (
		<Container maxWidth="xl">

			<Container>
				<form>
					<label>Username<input type="text" name="username" id="" onChange={e => setUsername(e.target.value)} /></label>
					<br></br>
					<label>Password<input type="password" name="password0" onChange={e => setPassword0(e.target.value)} /></label>
					<br></br>
					<label>Confirm Password<input type="password" name="password1" onChange={e => setPassword1(e.target.value)} /></label>
					<br></br>
					<Button type="submit" onClick={registerVerify}>REGISTER</Button>
				</form>
				{message}
			</Container>

		</Container>

	);
}

export default Register;
