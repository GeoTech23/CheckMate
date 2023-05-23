import React from 'react';
import { Link } from 'react-router-dom';
import DashDiv from '../components/styled/DashDiv';
import ContactDiv from '../components/styled/ContactDiv';
import { StoreContext } from '../store';

function Dashboard() {
	const { user, setUser, setLoggedIn } = React.useContext(StoreContext);

	const handleLogout = () => {
		setUser('');
		setLoggedIn(false);
	};

	const contacts = [
		{ name: 'Grandma', id: 1 },
		{ name: 'Grandpa', id: 2 },
		{ name: 'Elena', id: 3 },
		{ name: 'Adam', id: 4 },
	];
	const contactElements = [];
	contacts.forEach((contact) => {
		contactElements.push(
			<ContactDiv>
				<Link to={`/contact/${contact.id}`}>
					<p>{contact.name}</p>
				</Link>
			</ContactDiv>
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
