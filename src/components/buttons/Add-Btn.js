import React from 'react';
import { Link } from "gatsby"
import styled from "styled-components"

const Button = styled.button`
  font-size: 12px;
  background-color: red;
  color: white;
  padding: 8px 32px;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: white;
    color: red;
  }
`

const AddBtn =() => {
	return (
		<Link to="/new-project">
		   <Button>NEW PROJECT</Button>
        </Link>
	);
}

export default AddBtn