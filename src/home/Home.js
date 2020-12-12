
import Nav from "../Nav.js"
import Container from '@material-ui/core/Container';
import { Button } from "@material-ui/core";
import { UserContext, TokenContext } from '../context/Context.js';
import React, { useContext, useState } from 'react';

function Home()
{

	const { token, setToken } = useContext(TokenContext)
	const { user, setUser } = useContext(UserContext)

	

	return(
		<Container maxWidth="xl">

			<Container>
				HOME
			</Container>
			<Container>
				{token}
			</Container>

		</Container>

	);
}

export default Home;
