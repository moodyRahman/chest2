
import Container from '@material-ui/core/Container';
import { UserContext, TokenContext } from '../context/Context.js';
import React, { useContext } from 'react';

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
