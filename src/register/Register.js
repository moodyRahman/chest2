import Container from '@material-ui/core/Container';




function Register() {


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
