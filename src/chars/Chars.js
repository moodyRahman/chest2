
import { useContext } from "react";
import { UserContext } from "../context/Context.js";
import Container from '@material-ui/core/Container';
import Nav from "../Nav.js"


function Chars() {
	
	const { data, setData } = useContext(UserContext)
	function handleClick(e) {
		e.preventDefault();
		setData("honk")
	}

	return (


		<Container maxWidth="xl">

			{/* <Container maxWidth="xl">
				<Nav />
			</Container> */}

			<Container>
				CHARS
			</Container>

		</Container>
	);
}

export default Chars;