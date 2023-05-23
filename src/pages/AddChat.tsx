import React from 'react';
import { useContext } from 'react';
import SubmitDiv from '../components/styled/SubmitDiv';
import Form from '../components/styled/Form';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../store';



function AddChat() {
	const navigate = useNavigate();
	const { currentContact } = useContext(StoreContext);
	const ratingOptions = [];

	for (let i = 1; i <= 10; i++) {
		ratingOptions.push(<option value={i}>{i}</option>);
	}

	//need to also send contact id for the user  
	function handleSubmit(e: React.SyntheticEvent) {
		e.preventDefault();
		const date = e.target[0].value;
		const notes = e.target[1].value;
		const rating = e.target[2].value;

		fetch('/api/addchat', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ date, notes, rating, currentContact })
		})
		.then((res) => res.json())
		.then((data) => {
			navigate('/dashboard');
		})
		.catch((err) => {
			console.log(err);
			window.alert('Issue adding new chat. Try again later.');
		})
	}
	return (
		<>
			<h2>Add Chat</h2>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<label>Date</label>
						<input type='date' />
					<label>Notes</label>
						<input type='text' placeholder='notes'></input>
					<label>Rating</label>
					<select>{ratingOptions}</select>
					<button type='submit'>Add Chat</button>
				</Form>
      </SubmitDiv>
   
		<Link to='/dashboard'>
				<button style={{margin: '20px'}}>← Back to Dashboard</button>
			</Link>

		
		</>
	);
}

export default AddChat;
