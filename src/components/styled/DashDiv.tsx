import { styled } from 'styled-components';

const DashDiv = styled.div`
	display: grid;
	width: 700px;
	height: 500px;
	border-radius: 10px;
	grid-template-columns: repeat(4, 1fr);
	padding: 20px;
	justify-items: center;
	overflow: scroll;
	background-color: #d5ebfc;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default DashDiv;
