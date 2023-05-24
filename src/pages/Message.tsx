import React from 'react';
import MessageDiv from '../components/styled/MessageDiv';
import MessageTitle from '../components/styled/MessageTitle';
import MessageContainerDiv from '../components/styled/MessageContainerDiv';

function Message({ message }) {
	function handleDelete(e) {
		if (confirm('Are you sure you want to delete message?')) {
			fetch('/chat', {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ messageId: message.id }),
			})
				.then((res) => res.json())
				.then(() => {
					window.alert('Message deleted');
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
						date: {new Date(Date.parse(message.date)).toLocaleDateString()}
					</span>
					<span>rating: {message.rating}</span>
					<button className='edit-log' onClick={handleDelete}>
						✐
					</button>
					<button className='edit-log' onClick={handleDelete}>
						X
					</button>
				</MessageTitle>
				<p className='log-text'>
					asdfladksjf asdlkjf l;asdkfj ;adlsfjdlskfj kasdjfl;sdkhjf ;alshjdf
					kljhasflkjdhflk abnmvkljhgl airubg vlasdjndvlk jasvbilousdfbglaksjf
					nklsdav bnfildaughlbnsk afjnsdfa f asdf
				</p>
			</MessageDiv>
		</>
	);
}

export default Message;
