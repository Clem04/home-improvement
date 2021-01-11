import React from 'react';
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  background-color: white;
  padding: 8px 0;
  border-radius: 2px;
  border: 1px solid green;
  color: green;

  &:hover {
    color: white;
    background-color: green;
  }
`

const CompletedBtn =() => {
	return (
		<Button
      onClick={() => alert('Are you sure you want to make this change?')}>
      Completed
    </Button>
	);
}

export default CompletedBtn