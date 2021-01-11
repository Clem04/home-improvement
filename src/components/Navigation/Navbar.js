import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import BurgerMenu from "./Burger-Menu"
import AuthBtn from "../Buttons/Auth-Btn"
import AddBtn from "../Buttons/Add-Btn"

const Nav = styled.div`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  background-color: blue;
  color: white;
  position: relative;
  @media (max-width: 414px) {
    width: 100%;
    position: fixed;
  }
`

const Logo = styled.div`
  width: 15%;
  height: 32px;
  display: flex;
  align-items: center;
  @media (max-width: 414px) {
    width: fit-content;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 25%;
  }
`

const RightDiv = styled(Logo)`
  width: 85%;
  justify-content: space-between;
  @media (max-width: 414px) {
    display: none;
  }
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 75%;
  }
`
const RightSec = styled(RightDiv)`
  width: 100%;
  @media only screen and (max-width: 1024px) and (min-width: 768px) {
    width: 100%;
  }
`

const Navbar = () => {
  return (
  	<Nav>
    		<Logo>
          <Link to="/">
             <h4 style={{color: "white"}}>HOME IPROVEMENT</h4>
          </Link>
    		</Logo>
    		<RightDiv>
          <RightSec>
            <AddBtn />
      			<AuthBtn />
          </RightSec>
    		</RightDiv>
        <BurgerMenu />
  	</Nav>
  )
}

export default Navbar