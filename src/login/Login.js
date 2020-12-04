import React from 'react';
import Container from '@material-ui/core/Container';
import Nav from "../Nav.js"
import { Button } from '@material-ui/core';


export default function Login() {

	return (
		<Container maxWidth="xl">

			{/* <Container maxWidth="xl">
				<Nav />
			</Container> */}

			<Container>
				<Button variant="outlined">
					LOGIN
				</Button>
			</Container>

		</Container>
	);
}
