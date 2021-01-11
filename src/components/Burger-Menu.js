import React, { useState } from 'react';
import styled from "styled-components"

import { FiAlignCenter } from "react-icons/fi";
import RightNav from './Right-Nav'

const BurgerIcon = styled.div`
  display: none;
  @media (max-width: 414px) {
  	z-index: 20;
    display: flex;
    width: 42px;
    position: fixed;
    top: 8px;
    right: 16px;
  }
`

const BurgerMenu = () => {

	const [open, setOpen] = useState(false)

	return (
		<>
			<BurgerIcon open={open} onClick={() => setOpen(!open)}>
				<FiAlignCenter size="2x" />
			</BurgerIcon>
			<RightNav open={open} />
		</>
	);
}

export default BurgerMenu
