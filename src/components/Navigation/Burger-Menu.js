import React, { useState } from 'react';
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";
import RightNav from './Right-Nav'

const BurgerIcon = styled.div`
  display: none;
  @media (max-width: 414px) {
  	z-index: 20;
    display: flex;
    width: 42px;
    position: fixed;
    top: 12px;
    right: 8px;
  }
`

const BurgerMenu = () => {

	const [open, setOpen] = useState(false)

	return (
		<>
			<BurgerIcon open={open} onClick={() => setOpen(!open)}>
				<FontAwesomeIcon icon={faAlignRight} size="2x" />
			</BurgerIcon>
			<RightNav open={open} />
		</>
	);
}

export default BurgerMenu
