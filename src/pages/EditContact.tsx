import React from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { StoreContext } from '../store';

function EditContact() {
	const { userId, setContacts, currentContact } = useContext(StoreContext);
	const navigate = useNavigate();

	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const firstName = e.target[0].value;
		const lastName = e.target[1].value;
		const phoneNumber = e.target[2].value;
		const relationship = e.target[3].value;
		const days_before_reminder = e.target[4].value;
		const birthday = e.target[5].value;
		// console.log(name, phonenumber, relationship, daysbeforereminder, birthday)
		fetch(`api/contact/${userId}/${currentContact.contactid}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				birthday,
				phoneNumber,
				days_before_reminder,
				relationship,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setContacts(data.contacts);
				navigate(`/dashboard`);
			})
			.catch((err) => console.log(err));
	}

	function handleDelete(e) {
		fetch(`api/contact/${userId}/${currentContact.contactid}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				setContacts(data.contacts);
				navigate(`/dashboard`);
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
	}

	return (
		<>
			<h2>Edit Contact</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>First Name:</label>
					<input
						type='text'
						defaultValue={currentContact.firstname}
						required></input>
					<label>Last Name:</label>
					<input
						type='text'
						defaultValue={currentContact.lastname}
						required></input>
					<label>Phone Number:</label>
					<input
						type='text'
						defaultValue={currentContact.phonenumber}
						required></input>
					<label>Relationship:</label>
					<select required>
						<option
							value='friend'
							selected={currentContact.relation === 'friend'}>
							Friend
						</option>
						<option
							value='family'
							selected={currentContact.relation === 'family'}>
							Family
						</option>
						<option
							value='significant other'
							selected={currentContact.relation === 'significant other'}>
							Significant Other
						</option>
						<option
							value='coworker'
							selected={currentContact.relation === 'coworker'}>
							Coworker
						</option>
					</select>
					<label>Days Before Reminder:</label>
					<input
						type='text'
						defaultValue={currentContact.days_before_reminder}
						required></input>
					<label>Birthday:</label>
					<input
						type='date'
						required
						defaultValue={new Date(
							Date.parse(currentContact.birthday)
						).toLocaleDateString()}
					/>

					<button type='submit'>Edit Contact</button>
					<button type='button' className='delete' onClick={handleDelete}>
						Delete Contact
					</button>
				</Form>
			</SubmitDiv>
			<Link to='/dashboard'>
				<button style={{ margin: '20px' }}>← Back to Dashboard</button>
			</Link>
		</>
	);
}

export default EditContact;
