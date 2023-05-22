import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddContact from './components/AddContact.tsx';
import AddChat from './components/AddChat.tsx';
import Dashboard from './components/Dashboard.tsx';
import Login from './components/Login.tsx';
import Signup from './components/Signup.tsx';
import Contact from './components/Contact.tsx';
import StoreProvider from './store.tsx';

const router = createBrowserRouter([
	{ path: '/', element: <Login /> },
	{ path: '/signup', element: <Signup /> },
	{ path: '/dashboard', element: <Dashboard /> },
	{ path: '/addcontact', element: <AddContact /> },
	{ path: '/addchat', element: <AddChat /> },
	{ path: '/contact', element: <Contact /> },
	{ path: '/chat', element: <AddChat /> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<StoreProvider>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</StoreProvider>
	</React.StrictMode>
);
