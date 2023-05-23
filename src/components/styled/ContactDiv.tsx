import { styled } from 'styled-components';

const ContactDiv = styled.div`
	display: flex;
	flex-flow: column-nowrap;
	border-radius: 10px;
	height: 100px;
	width: 100px;
	justify-content: center;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	background-color: #4287f5;

	color: white;
	transition: 0.2s;
	padding: 10px;
	&:hover {
		cursor: pointer;
		background-color: #646cff;
		transform: scale(1.05);
	}
	&:active {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
	}
`;

export default ContactDiv;
