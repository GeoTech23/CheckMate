import React from 'react';
import { Link } from 'react-router-dom';
import AuthDiv from './styled/SubmitDiv';
import Form from './styled/Form';

function Signup() {
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<h2>Sign-Up</h2>
			<AuthDiv>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='password' placeholder='password' required />
					<input type='password' placeholder='confirm password' required />
					<input type='text' placeholder='phone number' required />
					<button type='submit'>Sign-Up</button>
				</Form>
			</AuthDiv>

			<Link to='/'>
				<p>Login</p>
			</Link>
			<Link to='/dashboard'>
				<p>Dashboard</p>
			</Link>
		</>
	);
}

export default Signup;
