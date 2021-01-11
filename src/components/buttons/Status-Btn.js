import React from 'react';
import styled from "styled-components"

const Button = styled.button`
  width: 100%;
  margin-top: 16px;
  background-color: white;
  padding: 8px 0;
  border-radius: 2px;
  border: 1px solid ${({ color }) => color ? 'green' : 'red'};
  color: ${({ color }) => color ? 'green' : 'red'};

  &:hover {
    color: white;
    background-color: ${({ color }) => color ? 'green' : 'red'};
  }
`

const StatusBtn =({text, color}) => {
	return (
		<Button
      color={color}
      onClick={() => alert('Are you sure you want to make this change?')}>
      {text}
    </Button>
	);
}

export default StatusBtn