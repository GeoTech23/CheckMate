import { useEffect, useState }from 'react';
import { Link, useParams } from 'react-router-dom';
import Message from './Message';
// import use Params from react router
// add params inside contact ()
function Contact() {
	const { userId } = useParams();
	// const [messages, setMessages] = useState([]);

	const mockData = {
		user: 'grandma',
		phone_number: '555-555-5555',
		chats: [
			{ date: '1', message: 'this is a message', rating: 10 },
			{ date: '2', message: 'this is a message', rating: 8 },
			{ date: '3', message: 'this is a message', rating: 2 },
		],
	};
	
	// useEffect(() => {
	// 	fetch(`/api/chat/`)
	// })

	const msgs = mockData.chats.map((msg) => {
		return <Message message={msg} />
	})
	
	return (
		<>
			<div className='contact-header'>
				<h2>{mockData.user}</h2>
				<h3>{mockData.phone_number}</h3>
			</div>
			<div>
				{msgs}
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
