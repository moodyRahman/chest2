import React, { useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { UserContext, TokenContext, TabContext } from '../context/Context.js';




export default function Login() {

	const { user, setUser } = useContext(UserContext)
	const { token, setToken } = useContext(TokenContext)
	const { tab, setTab } = useContext(TabContext);

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState("")

	const [message, setMessage] = useState("")

	const login = (event) => {
		event.preventDefault();
		const data = {
			"username": username,
			"password": password
		}

		fetch("http://localhost:5000/auth", {
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
					setRedirect("/")
				}
			})
	}


	if (redirect) {
		return (
			<Link to="/"></Link>
		)
	}

	return (
		<Container maxWidth="xl">

			<Container>
				<form>

					<label>Username<input type="text" name="username" id="" onChange={e => setUsername(e.target.value)} /></label>
					<br></br>
					<label>Password<input type="password" name="password" id="" onChange={e => setPassword(e.target.value)} /></label>
					<br></br>
					<Button type="submit" onClick={login}>LOGIN</Button>
				</form>
				{message}
			</Container>

		</Container>
	);
}
