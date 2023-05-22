import { styled } from 'styled-components';

const DashDiv = styled.div`
	border: 1px solid black;
	display: grid;
	width: 700px;
	height: 500px;
	border-radius: 10px;
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;
	justify-items: center;
	overflow: scroll;
`;

export default DashDiv;
