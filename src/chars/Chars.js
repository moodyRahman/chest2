
import { useContext } from "react";
import { UserContext } from "../context/Context.js";
import Nav from "../Nav.js"


function Chars() {
	
	const { data, setData } = useContext(UserContext)
	function handleClick(e) {
		e.preventDefault();
		setData("honk")
	}

	return (


			<>
				<Nav>

				</Nav>

				HELLOOOOO
			</>
	);
}

export default Chars;