import React from "react"
import styled from "styled-components"

const Nav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: blue;
  color: white;
`

const LeftDiv = styled.div`
  width: 50%;
  height: 32px;
  display: flex;
  align-items: center;
`

const RightDiv = styled(LeftDiv)`
  justify-content: flex-end;
`

const AddBtn = styled.button`
  font-size: 12px;
  background-color: red;
  color: white;
  margin: 0 0 0 32px;
  padding: 8px 32px;
  border-radius: 4px;
  border: none;
`
const SignOutBtn = styled(AddBtn)`
  background-color: rgba(0,0,200,1);
  padding: 8px 16px;
`

export default function Navbar() {
  return (
  	<Nav>
  		<LeftDiv>
  			<h4>HOME IPROVEMENT</h4>
  			<AddBtn>NEW PROJECT</AddBtn>
  		</LeftDiv>
  		<RightDiv>
  			<SignOutBtn>NEW PROJECT</SignOutBtn>
  		</RightDiv>
  	</Nav>
  )
}