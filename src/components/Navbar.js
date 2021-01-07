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
  width: 15%;
  height: 32px;
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    width: 70%;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 25%;
  }
`

const RightDiv = styled(LeftDiv)`
  width: 85%;
  justify-content: space-between;
  @media (max-width: 414px) {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 75%;
  }
`

const AddBtn = styled.button`
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

  &:active {
    color: red; 
    background-color: white;
    border: 1px solid red;
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
    		</LeftDiv>
    		<RightDiv>
          <Link to="/new-project">
    			   <AddBtn>NEW PROJECT</AddBtn>
          </Link>
          <FiAlignCenter size="2x" className={styles.burgerIcon} />
    			<SignOutBtn>SIGN OUT</SignOutBtn>
    		</RightDiv>
  	</Nav>
  )
}

export default Navbar