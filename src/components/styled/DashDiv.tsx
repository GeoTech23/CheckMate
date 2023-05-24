import { styled } from 'styled-components';

const DashDiv = styled.div`
	display: grid;
	color: white;
	width: 700px;
	height: 500px;
	border-radius: 10px;
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;
	justify-items: center;
	overflow: scroll;
	background: rgb(123, 171, 255);
	background: radial-gradient(
		circle,
		rgba(123, 171, 255, 1) 19%,
		rgba(106, 158, 255, 1) 100%
	);
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export default DashDiv;
