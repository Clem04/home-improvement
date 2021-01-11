import React from "react"
import styled from "styled-components"

const Button = styled.button`
  width: 48%;
  padding: 4px 0;
  background-color: white;
  color: blue;
  border: 1px solid blue;
  border-radius: 2px;

  &:hover {
    background-color: blue;
    color: white;
  }
`
const EditDeleteBtn =({text}) => {
	return (
		<Button>{text}</Button>
	);
}

export default EditDeleteBtn