import React from "react"
import styled from "styled-components"

import { FiAlignCenter } from "react-icons/fi";

import styles from './Navbar.module.css'

import { Link } from "gatsby"

const Nav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: blue;
  color: white;
  position: relative;
`

const LeftDiv = styled.div`
  width: 50%;
  height: 32px;
  display: flex;
  align-items: center;
`

const RightDiv = styled(LeftDiv)`
  justify-content: flex-end;
  @media (max-width: 414px) {
    width: 10%;
  }
`

const AddBtn = styled.button`
  font-size: 12px;
  background-color: red;
  color: white;
  margin: 0 0 0 32px;
  padding: 8px 32px;
  border-radius: 4px;
  border: none;

  &:hover {
    background-color: white;
    color: red;
  }

  @media (max-width: 414px) {
    display: none;
  }
`
const SignOutBtn = styled(AddBtn)`
  background-color: rgba(0,0,200,1);
  padding: 8px 16px;
`

const Navbar = () => {
  return (
  	<Nav>
    		<LeftDiv>
          <Link to="/">
             <h4 style={{color: "white"}}>HOME IPROVEMENT</h4>
          </Link>
          <Link to="/new-project">
    			   <AddBtn>NEW PROJECT</AddBtn>
          </Link>
    		</LeftDiv>
    		<RightDiv>
          <FiAlignCenter size="2x" className={styles.burgerIcon} />
    			<SignOutBtn>SIGN OUT</SignOutBtn>
    		</RightDiv>
  	</Nav>
  )
}

export default Navbar