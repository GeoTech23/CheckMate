import React from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link, useNavigate } from 'react-router-dom';

function AddContact() {
	const navigate = useNavigate()
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const name = e.target[0].value
		const phonenumber = e.target[1].value
		const relationship = e.target[2].value
		const daysbeforereminder = e.target[3].value
		const birthday = e.target[4].value
		// console.log(name, phonenumber, relationship, daysbeforereminder, birthday)
		fetch('/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({name, phonenumber, relationship, daysbeforereminder, birthday})
			}).then(res => res.json()).then(data => {
				 navigate('/contact')
		}).catch(err => console.log(err))

	}
	return (
		<>
			<h2>Add Contact</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>Name:</label>
					<input type='text' placeholder='Name' required></input>
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
					<input type='text' placeholder='Days before reminder' required></input>
					<label>Birthday:</label>
					<input type='date' required />

					<button type='submit'>Add Contact</button>
				</Form>
			</SubmitDiv>
			<Link to='/dashboard'>
				<button style={{margin: '20px'}}>← Back to Dashboard</button>
			</Link>
		</>
	);
}

export default AddContact;
