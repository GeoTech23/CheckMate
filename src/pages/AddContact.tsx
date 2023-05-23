import React from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link } from 'react-router-dom';

function AddContact() {
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
	}
	return (
		<>
			<h2>Add Contact</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>Name</label>
					<input type='text' placeholder='Name'></input>
					<label>Phone Number</label>
					<input type='text' placeholder='xxx-xxx-xxxx'></input>
					<label>Relationship</label>
					<select>
						<option value='friend'>Friend</option>
						<option value='family'>Family</option>
						<option value='significant other'>Significant Other</option>
						<option value='coworker'>Coworker</option>
					</select>
					<label>Days Before Reminder</label>
					<input type='text' placeholder='Days before reminder'></input>
					<label>Birthday</label>
					<input type='date' />

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
