import React from 'react';
import { Link } from 'react-router-dom';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';

function Signup() {
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		fetch('/api/test');
	};
	return (
		<>
			<h2>Sign-Up</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='password' placeholder='password' required />
					<input type='password' placeholder='confirm password' required />
					<input type='text' placeholder='phone number' required />
					<button type='submit'>Sign-Up</button>
				</Form>
			</SubmitDiv>

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
