import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DashDiv from '../components/styled/DashDiv';
import { StoreContext } from '../store';
import iconSrc from '../utils/iconSrc';

function Dashboard() {
	const { user, setUser, setLoggedIn, setCurrentContact, contacts } =
		React.useContext(StoreContext);
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
			default:
				return '../../src/assets/red.png';
		}
	}

	const contactElements = [];
	contacts.forEach((contact) => {
		contactElements.push(
			<div className='contact-wrapper'>
				<img
					className='relat-icon'
					src={iconSrc(contact.relation)}
					onClick={() => {
						navigate(`/contact/${contact.contactid}`);
						setCurrentContact(contact);
						console.log(contact);
					}}
				/>
				<p>{contact.firstname}</p>
			</div>
		);
	});

	return (
		<>
			<h2>Welcome, {user}</h2>

			<DashDiv>
				{contactElements}
				<div className='contact-wrapper'>
					<img
						className='relat-icon'
						src={'../../src/assets/add.png'}
						onClick={() => navigate(`/addContact`)}
					/>
					<p>Add Contact</p>
				</div>
			</DashDiv>
			<Link to='/'>
				<button onClick={handleLogout} style={{ margin: '20px' }}>
					Logout
				</button>
			</Link>
		</>
	);
}

export default Dashboard;
