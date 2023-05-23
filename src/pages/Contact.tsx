import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
	const mockData = {
		user: 'grandma',
		phone_number: '555-555-5555',
		chats: [
			{ date: '1', message: 'this is a message' },
			{ date: '2', message: 'this is a message' },
			{ date: '3', message: 'this is a message' },
		],
	};
	
	
	return (
		<>
			<div className='contact-header'>
				<h2>{mockData.user}</h2>
				<h3>{mockData.phone_number}</h3>
			</div>
			<div>
				{mockData.chats.map((message) => {
					return <div> Your message here...</div>
				})}
			</div>	

			<Link to='/addchat'>Add Chat</Link>
			<Link to='/'>
				<p>Login</p>
			</Link>
			<Link to='/signup'>
				<p>Sign-Up</p>
			</Link>
		</>
	);
}

export default Contact;
