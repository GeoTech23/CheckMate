import React from 'react';
import { Link } from 'react-router-dom';
import DashDiv from './styled/DashDiv';
import ContactDiv from './styled/ContactDiv';
import { StoreContext } from '../store';

function Dashboard() {
	const { user, setUser, setLoggedIn } = React.useContext(StoreContext);

  const handleLogout = () => {
    setUser('');
    setLoggedIn(false);
  }

	const sampleContacts = [];
	for (let i = 0; i < 4; i++) {
		sampleContacts.push(
			<ContactDiv>
				<Link to='/contact'>
					<p>User Page</p>
				</Link>
			</ContactDiv>
		);
	}

	return (
		<>
			<h2>Welcome, {user}</h2>

			<DashDiv>{sampleContacts}</DashDiv>
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
