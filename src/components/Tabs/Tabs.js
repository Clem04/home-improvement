import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import styles from './Tabs.module.css'

const ListsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    margin-top: 48px;
  }
`;

const ContentDiv = styled.div`
  width: 100%;
  min-height: 30vh;
  padding: 8px 32px;
  display: grid;
  grid-template-rows: ;
  row-gap: 16px;
  @media (max-width: 414px) {
    padding: 0;
  }
`;


const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }

  const contentTab = children.map((child) => {
    if (child.props.label === activeTab)
      return (
        <ContentDiv key={child.props.label}>
          {child.props.children}
        </ContentDiv>
    );
  })

  const tabLabel = children.map((tab) => (
    <li className={tab.props.label === activeTab ? styles.current : ""} 
    key={tab.props.label}>

      <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
      
    </li>
  ))

  return(
  	<ListsContainer>
	    <ul className={styles.tabs}>
        {tabLabel}
	    </ul>

      {contentTab}
  	</ListsContainer>
  )
}

export default Tabs
