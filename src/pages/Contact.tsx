import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Message from './Message';
import MessageContainerDiv from '../components/styled/MessageContainerDiv';
import MessageDiv from '../components/styled/MessageDiv';
import { StoreContext } from '../store';
import iconSrc from '../utils/iconSrc';
// import use Params from react router
// add params inside contact ()
function Contact() {
	const [messages, setMessages] = useState([]);
	const { id } = useParams();
	const navigate = useNavigate();
	const { currentContact, userId } = React.useContext(StoreContext);

	useEffect(() => {
		console.log(currentContact);
		fetch(`/api/chat/${userId}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(
					'Data received in GET Chat fetch request in Contact.tsx: ',
					data
				);
				setMessages(data);
			})
			.catch((err) => {
				console.log('Error in Contact.tsx:', err);
			});
	}, []);

	// const mockData = {
	// 	user: 'grandma',
	// 	phone_number: '555-555-5555',
	// 	chats: [
	// 		{
	// 			id: 1,
	// 			date: '10/12/1999',
	// 			message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
	// 			rating: 10,
	// 		},
	// 		{
	// 			id: 2,
	// 			date: '10/13/1999',
	// 			message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
	// 			rating: 8,
	// 		},
	// 		{
	// 			id: 3,
	// 			date: '10/14/1999',
	// 			message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
	// 			rating: 2,
	// 		},
	// 		{
	// 			id: 4,
	// 			date: '10/14/1999',
	// 			message: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. `,
	// 			rating: 2,
	// 		},
	// 	],
	// };

	// add chat button handleClick event to navigate to AddChat page
	function handleClick() {
		navigate('/addchat');
	}

	// loop through messages to build msgs array with Message components
	const msgs = messages.map((msg) => {
		return <Message message={msg} />;
	});

	return (
		<>
			<div className='contact-header'>
				<img className='relat-icon' src={iconSrc(currentContact.relation)} />
				<h2>
					{currentContact.firstname} {currentContact.lastname}
				</h2>
				<div style={{marginTop: '10px' }}>
					<h3>📞 {currentContact.phonenumber}</h3>
					<h4>
						🎂 {' '}
						{new Date(Date.parse(currentContact.birthday)).toLocaleDateString()}
					</h4>
				</div>
			</div>
			<div className='call-log-container'>
				<h3>Chat Log</h3>
				<button
					style={{ width: '200px', margin: '20px 0' }}
					onClick={handleClick}>
					<span style={{ padding: '0 10px' }}>💬</span>Add Chat
				</button>
				<MessageContainerDiv>{msgs}</MessageContainerDiv>
			</div>
			<Link to='/dashboard'>
				<button style={{ margin: '20px' }}>← Back to Dashboard</button>
			</Link>
		</>
	);
}

export default Contact;
