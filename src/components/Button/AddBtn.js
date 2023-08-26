import React from "react";
import { styled } from "styled-components";

const AddBtn = ({children}) => {
  return <BtnAdd>{children}</BtnAdd>;
};

export default AddBtn;

const BtnAdd = styled.button`
background-color: #5045e4;
width: 26rem;
height: 4rem;
border-radius: 10px;
color: white;
font-size: 1.2rem;
margin-top: 3rem;
border: #5045e3;
`
