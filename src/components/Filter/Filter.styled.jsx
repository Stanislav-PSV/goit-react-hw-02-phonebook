import styled from "styled-components";

export const InputFilter = styled.input`
border: 1px solid #000000;
	height: 40px;
	margin: 0;
	padding: 0 15px 0 15px;
	border-radius: 5px;

	&:not(:last-child){
		margin-right: 10px;
	}
`

export const LabelFilter = styled.label`
	margin: 10px 0 10px 0;
	display: flex;
	flex-direction: column;
	font-size: 22px;
	color: #D3D3D3;
`