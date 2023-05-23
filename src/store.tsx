import React from 'react';

export const StoreContext = React.createContext(null);
export default ({ children }) => {
	const [user, setUser] = React.useState('');
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [currentContact, setCurrentContact] = React.useState({});
	const [userId, setUserId] = React.useState('');
	const [contacts, setContacts] = React.useState([]);

	return (
		<StoreContext.Provider
			value={{
				user,
				setUser,
				loggedIn,
				setLoggedIn,
				currentContact,
				setCurrentContact,
				userId,
				setUserId,
				contacts,
				setContacts,
			}}>
			{children}
		</StoreContext.Provider>
	);
};
