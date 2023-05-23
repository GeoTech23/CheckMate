import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashDiv from '../components/styled/DashDiv';
import { StoreContext } from '../store';

function Dashboard() {
	const { user, setUser, setLoggedIn } = React.useContext(StoreContext);
	const navigate = useNavigate();
	const handleLogout = () => {
		setUser('');
		setLoggedIn(false);
	};

	function iconSrc(relationship) {
		switch (relationship) {
			case 'family':
				return '../../src/assets/blue.png';
			case 'friend':
				return '../../src/assets/green.png';
			case 'significant other':
				return '../../src/assets/red.png';
		}
	}

	const contacts = [
		{ name: 'Grandma', id: 1, relationship: 'family' },
		{ name: 'Grandpa', id: 2, relationship: 'family' },
		{ name: 'Elena', id: 3, relationship: 'significant other' },
		{ name: 'Adam', id: 4, relationship: 'friend' },
	];
	const contactElements = [];
	contacts.forEach((contact) => {
		contactElements.push(
			<div className='contact-wrapper'>
				<img
					className='relat-icon'
					src={iconSrc(contact.relationship)}
					onClick={() => navigate(`/contact/${contact.id}`)}
				/>
				<p>{contact.name}</p>
			</div>
		);
	});

	return (
		<>
			<h2>Welcome, {user}</h2>

			<DashDiv>
				{contactElements.length > 0 ? (
					contactElements
				) : (
					<p>You have no contacts yet!</p>
				)}
				<div className='contact-wrapper'>
					{' '}
					<img
						className='relat-icon'
						src={'../../src/assets/add.png'}
						onClick={() => navigate(`/addContact`)}
					/>
					<p>Add Contact</p>
				</div>
			</DashDiv>
			<Link to='/'>
				<p>Login</p>
			</Link>
			<Link to='/signup'>
				<p>Sign-Up</p>
			</Link>
			<Link to='/addContact'>
				<p>Add Contact</p>
			</Link>
			<Link to='/' onClick={handleLogout}>
				<p>Logout</p>
			</Link>
		</>
	);
}

export default Dashboard;
