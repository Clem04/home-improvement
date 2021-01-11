import React from 'react';
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  display: none;

  @media (max-width: 414px) {
  	width: 100%;
  	height: 100vh;
  	background-color: blue;
  	list-style: none;
  	display: flex;
  	flex-wrap: nowrap;
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
					<Link to="/new-project">
			            <h4 style={{color: "white"}}>New Project</h4>
			        </Link>
				</li>
				<li>Sign Out</li>
			</Ul>
		</>
	);
}

export default RightNav