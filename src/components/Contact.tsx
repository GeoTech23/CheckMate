import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
	return (
		<>
			<p>This is Contact</p>
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
