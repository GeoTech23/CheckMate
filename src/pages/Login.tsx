import { useContext } from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/styled/Form';
import { StoreContext } from '../store';

function Login() {
	const { setUser, setLoggedIn, setUserId, setContacts } =
		useContext(StoreContext);
	const navigate = useNavigate();

	// function handleSubmit(e) {
	// 	e.preventDefault();
	// 	setUser(e.target[0].value);
	// 	navigate('/dashboard');
	// }

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const username = e.target[0].value;
		const password = e.target[1].value;
		// console.log(username, password);
		fetch('/api/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				setUser(username);
				setLoggedIn(true);
				setUserId(data.userId);
				setContacts(data.contacts);
				navigate('/dashboard');
			})
			.catch((err) => {
				console.log(err);
				window.alert('Error logging in. Please try again later');
			});
	}

	return (
		<>
			<img id='main-logo' src='/chess-pieces.png' />
			<h1>CheckMate</h1>
			<h4 id='tagline'>Keep your connections in check</h4>
			<SubmitDiv>
				<h2>Login</h2>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='password' placeholder='password' required />
					<button type='submit'>Login</button>
				</Form>
			</SubmitDiv>
			<p style={{ color: 'white' }}>Don't have an account?</p>
			<Link to='/signup'>
				<button style={{ margin: '10px' }}>Sign-up</button>
			</Link>
			<Link to='/dashboard'>
				<p> To Dashboard </p>
			</Link>
		</>
	);
}

export default Login;
