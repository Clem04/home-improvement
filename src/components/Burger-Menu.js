import React from 'react';
import styled from "styled-components"

import { FiAlignCenter } from "react-icons/fi";

const BurgerIcon = styled.div`
  display: none;
  @media (max-width: 414px) {
    display: block;
    width: 42px;
  }
`

const BurgerMenu = () => {
	return (
		<BurgerIcon>
			<FiAlignCenter size="2x" />
		</BurgerIcon>
	);
}

export default BurgerMenu
