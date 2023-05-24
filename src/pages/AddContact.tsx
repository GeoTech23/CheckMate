import React from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../store';

function AddContact() {
	const { userId } = useContext(StoreContext);
	const navigate = useNavigate();
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const firstName = e.target[0].value;
		const lastName= e.target[1].value
		const phoneNumber = e.target[2].value;
		const relationship = e.target[3].value;
		const days_before_reminder = e.target[4].value;
		const birthday = e.target[5].value;
		// console.log(name, phonenumber, relationship, daysbeforereminder, birthday)
		fetch(`api/contact/${userId}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName, lastName, birthday, phoneNumber, days_before_reminder, relationship

			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				navigate('/dashboard');
			})
			.catch((err) => console.log(err));
	}
	return (
		<>
			<h2>Add Contact</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>First Name:</label>
					<input type='text' placeholder='First Name' required></input>
					<label>Last Name:</label>
					<input type='text' placeholder='Last Name' required></input>
					<label>Phone Number:</label>
					<input type='text' placeholder='xxx-xxx-xxxx' required></input>
					<label>Relationship:</label>
					<select required>
						<option value='friend'>Friend</option>
						<option value='family'>Family</option>
						<option value='significant other'>Significant Other</option>
						<option value='coworker'>Coworker</option>
					</select>
					<label>Days Before Reminder:</label>
					<input
						type='text'
						placeholder='Days before reminder'
						required></input>
					<label>Birthday:</label>
					<input type='date' required />

					<button type='submit'>Add Contact</button>
				</Form>
			</SubmitDiv>
			<Link to='/dashboard'>
				<button style={{ margin: '20px' }}>← Back to Dashboard</button>
			</Link>
		</>
	);
}

export default AddContact;
