import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { StoreContext } from '../store';

function Signup() {
	// const handleSubmit = (e: React.SyntheticEvent) => {
	// 	e.preventDefault();
	// 	fetch('/api/test');
	// };

	const { setUser } = React.useContext(StoreContext);
	const navigate = useNavigate();

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const username = e.target[0].value;
		const password1 = e.target[1].value;
		const password2 = e.target[2].value;
		const phoneNumber = e.target[3].value;
		// console.log(username, password1, password2, phoneNumber);
		if (password1 !== password2) {
			window.alert('Passwords do not match');
			return;
		}

		if (!phoneNumber.match(/^\d{3}\-\d{3}\-\d{4}$/gm)) {
			window.alert('Phone number format incorrect. Ex: 123-456-7890');
			return;
		}
		fetch('/api/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username, password: password1, phoneNumber }),
		})
			.then((res) => res.json())
			.then((res) => {
				if (res) {
					window.alert('Account created!');
					navigate('/');
				} else {
					window.alert('Error with sign-up. Please try again later.');
				}
			})
			.catch((err) => {
				console.log(err);
				window.alert('Error with sign-up. Please try again later.');
			});
	}
	return (
		<>
			<h2>Sign-Up</h2>
			<SubmitDiv>
				<h4>Create Account</h4>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='username' required />
					<input type='password' placeholder='password' required />
					<input type='password' placeholder='confirm password' required />
					<input type='text' placeholder='phone number' required />
					<button type='submit'>Sign-Up</button>
				</Form>
			</SubmitDiv>

			<Link to='/'>
				<button style={{ margin: '20px' }}>← Back to Login</button>
			</Link>
			<Link to='/dashboard'>
				<p>Dashboard</p>
			</Link>
		</>
	);
}

export default Signup;
