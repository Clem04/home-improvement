import React from 'react';
import styled from "styled-components"

const Button = styled.button`
  font-size: 12px;
  background-color: rgba(0,0,200,1);
  color: white;
  padding: 8px 16px;
  padding: 8px 32px;
  border-radius: 4px;
  border: none;
  &:hover {
    background-color: white;
    color: blue;
  }
`

const AuthBtn = () => {
	return (
		<Button>SIGN OUT</Button>
	);
}

export default AuthBtn
