import { useContext } from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/styled/Form';
import { StoreContext } from '../store';

function Login() {
	const { user, setUser } = useContext(StoreContext);
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		setUser(e.target[0].value);
		navigate('/dashboard');
	}

	return (
		<>
			<img id='main-logo' src='/chess-pieces.png' />
			<h1>CheckMate</h1>
			<SubmitDiv>
				<h2>Login</h2>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='text' placeholder='password' required />
					<button type='submit'>Login</button>
				</Form>
			</SubmitDiv>

			<Link to='/signup'>Sign-up</Link>
			<Link to='/dashboard'>
				<p> To Dashboard </p>
			</Link>
		</>
	);
}

export default Login;
