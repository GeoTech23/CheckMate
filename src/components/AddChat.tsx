import React from 'react';
import SubmitDiv from './styled/SubmitDiv';
import Form from './styled/Form';
import { Link } from 'react-router-dom';

function AddChat() {
	const ratingOptions = [];

	for (let i = 1; i <= 10; i++) {
		ratingOptions.push(<option value={i}>{i}</option>);
	}

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<>
			<p>This is AddChat</p>
			<SubmitDiv>
				<Form onSubmit={handleSubmit}>
					<input type='date' />
					<input type='text' placeholder='notes'></input>
					<select>{ratingOptions}</select>
					<button type='submit'>Add Chat</button>
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

export default AddChat;
