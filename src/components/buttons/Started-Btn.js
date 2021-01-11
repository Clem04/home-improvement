import React from 'react';
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  background-color: white;
  padding: 8px 0;
  border-radius: 2px;
  border: 1px solid red;
  color: red;

  &:hover {
    color: white;
    background-color: red;
  }
`

const StartedBtn =() => {
	return (
		<Button 
      onClick={() => 
        alert('Are you sure you have completed this project?')}>
        Started
    </Button>
	);
}

export default StartedBtn