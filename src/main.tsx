import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddContact from './pages/AddContact.tsx';
import AddChat from './pages/AddChat.tsx';
import Dashboard from './pages/Dashboard.tsx';
import Login from './pages/Login.tsx';
import Signup from './pages/Signup.tsx';
import Contact from './pages/Contact.tsx';
import StoreProvider from './store.tsx';
import './index.css';

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
