import { styled } from 'styled-components';

const ContactDiv = styled.div`
	display: flex;
	border-radius: 10px;
	height: 100px;
	width: 100px;
	justify-content: center;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	background-color: #3b5796;
	color: white;
	&:hover {
		cursor: pointer;
		background-color: #4287f5;
	}
`;

export default ContactDiv;
