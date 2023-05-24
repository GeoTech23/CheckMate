import { styled } from 'styled-components';

const DashDiv = styled.div`
	display: grid;
	color: white;
	align-items: center;
	font-weight: bold;
	width: 700px;
	height: 500px;
	border-radius: 10px;
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;
	justify-items: center;
	overflow: scroll;
	background-color: #61b0ff;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`;

export default DashDiv;
