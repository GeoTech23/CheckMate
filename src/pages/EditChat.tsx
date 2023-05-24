import React from 'react';
import { useContext } from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../store';

function EditChat() {
	const navigate = useNavigate();
	const { currentContact, userId, currentMessage } = useContext(StoreContext);
	const ratingOptions = [];

	for (let i = 1; i <= 10; i++) {
		ratingOptions.push(<option value={i}>{i}</option>);
	}

	//need to also send contact id for the user
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const date = e.target[0].value;
		const message_text = e.target[1].value;
		const rating = e.target[2].value;

		fetch(`/api/chat/${userId}/${currentContact.contactid}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				date,
				message_text,
				rating,
				messageId: currentMessage.messageid,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('success', data);
				navigate(`/contact/${currentContact.contactid}`);
			})
			.catch((err) => {
				console.log(err);
				window.alert('Issue adding new chat. Try again later.');
			});
	}
	return (
		<>
			<h2>Edit Chat</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>Date</label>
					<input type='date' />
					<label>Notes</label>
					<input type='text' placeholder='notes'></input>
					<label>Rating</label>
					<select>{ratingOptions}</select>
					<button type='submit'>Edit Chat</button>
				</Form>
			</SubmitDiv>

			<Link to='/dashboard'>
				<button style={{ margin: '20px' }}>← Back to Dashboard</button>
			</Link>
		</>
	);
}

export default EditChat;
