import React from 'react';
import styled from "styled-components"

import AuthBtn from "../buttons/Auth-Btn"
import AddBtn from "../buttons/Add-Btn"

const Ul = styled.ul`
  display: none;

  @media (max-width: 414px) {
  	width: 100%;
  	height: 100vh;
  	background-color: blue;
  	list-style: none;
  	display: flex;
  	flex-flow: column nowrap;
  	padding-top: 80px;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: 0;

  	li {
  		padding: 16px 8px;
  	}
  }
`

const RightNav = ({ open }) => {
	return (
		<>
			<Ul open={open}>
				<li>
					<AddBtn />
				</li>
				<li>
          <AuthBtn />
        </li>
			</Ul>
		</>
	);
}

export default RightNav