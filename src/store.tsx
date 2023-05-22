import React from 'react';

export default ({ children }) => {
	const StoreContext = React.createContext({});
	const [user, setUser] = React.useState('');
	const [loggedIn, setLoggedIn] = React.useState(false);
	const [currentContact, setCurrentContact] = React.useState({});

	return (
		<StoreContext.Provider
			value={{
				user,
				setUser,
				loggedIn,
				setLoggedIn,
				currentContact,
				setCurrentContact,
			}}>
			{children}
		</StoreContext.Provider>
	);
};
