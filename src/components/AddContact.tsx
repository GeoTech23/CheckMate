import React from 'react';
import SubmitDiv from './styled/SubmitDiv';
import Form from './styled/Form';
import { Link } from 'react-router-dom';

function AddContact() {
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<>
			<h2>Add Contact</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<input type='text' placeholder='Name'></input>
					<input type='text' placeholder='Phone Number'></input>
					<select>
						<option value='friend'>Friend</option>
						<option value='family'>Family</option>
						<option value='significant other'>Significant Other</option>
						<option value='coworker'>Coworker</option>
					</select>
					<input type='text' placeholder='Days before reminder'></input>
					<button type='submit'>Add Contact</button>
				</Form>
			</SubmitDiv>
			<Link to='/'>
				<p>Login</p>
			</Link>
			<Link to='/signup'>
				<p>Sign-Up</p>
			</Link>
			<Link to='/dashboard'>
				<p>Dashboard</p>
			</Link>
		</>
	);
}

export default AddContact;
