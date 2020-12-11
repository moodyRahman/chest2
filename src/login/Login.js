import React, { useContext, useState } from 'react';
import Container from '@material-ui/core/Container';
import Nav from "../Nav.js"
import { Button } from '@material-ui/core';
import { UserContext, TokenContext } from '../context/Context.js';




export default function Login() {

	const { user, setUser } = useContext(UserContext)
	const { token, setToken } = useContext(TokenContext)
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [redirect, setRedirect] = useState("")

	const login = (event) => {
		event.preventDefault();
		const data = {
			"username": username,
			"password": password
		}

		fetch("http://moodyrahman.com:5000/auth", {
			method: 'POST', // *GET, POST, PUT, DELETE, etc
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data) // body data type must match "Content-Type" header
		})
			.then(res => res.json())
			.then(response => {
				if (response.status == 200) {
					console.log(response)
					setToken(response.token)
					setRedirect("/register")
				}
			})
	}

	return (
		<Container maxWidth="xl">

			<Container>
				<label>Username<input type="text" name="username" id="" onChange={e => setUsername(e.target.value)} /></label>
				<br></br>
				<label>Password<input type="password" name="password" id="" onChange={e => setPassword(e.target.value)} /></label>

				<Button type="submit" onClick={console.log("m")}>LOGIN</Button>
			</Container>

		</Container>
	);
}
