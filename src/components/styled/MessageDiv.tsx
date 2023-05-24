import { styled } from 'styled-components';

const MessageDiv = styled.div`
	color: black;
	border-radius: 10px;
	min-height: 200px;
	width: 400px;
	margin: 20px 0;
	justify-content: center;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	overflow: scroll;
	line-height: 27px;
	background: repeating-linear-gradient(
		white,
		white 25px,
		#9198e5 26px,
		#9198e5 27px
	);
	background-attachment: local;
`;

export default MessageDiv;
