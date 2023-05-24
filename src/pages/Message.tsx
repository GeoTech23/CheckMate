import React, { useContext } from 'react';
import MessageDiv from '../components/styled/MessageDiv';
import MessageTitle from '../components/styled/MessageTitle';
import MessageContainerDiv from '../components/styled/MessageContainerDiv';
import { StoreContext } from '../store';
import { useNavigate } from 'react-router-dom';

function Message({ message, setRefresh }) {
	const navigate = useNavigate();
	const { userId, currentContact, setCurrentMessage } =
		useContext(StoreContext);

	function handleDelete(e) {
		if (confirm('Are you sure you want to delete message?')) {
			fetch(`/api/chat/${userId}/${currentContact.contactid}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ messageId: message.messageid }),
			})
				.then((res) => res.json())
				.then(() => {
					window.alert('Message deleted');
					setRefresh(prev => !prev)
				})
				.catch((err) => {
					window.alert(`Error deleting message: ${err}`);
					console.log(err);
				});
		}
	}

	return (
		<>
			<MessageDiv>
				<MessageTitle>
					<span>
						🗓️ {new Date(Date.parse(message.date)).toLocaleDateString()}
					</span>
					<span>rating: {message.rating}</span>
					<button
						className='edit-log'
						onClick={() => {
							setCurrentMessage(message);
							navigate('/editchat');
						}}>
						✏️
					</button>
					<button className='edit-log' onClick={handleDelete}>
						❌
					</button>
				</MessageTitle>
				<p className='log-text'>{message.message_text}</p>
			</MessageDiv>
		</>
	);
}

export default Message;
