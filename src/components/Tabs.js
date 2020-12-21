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
`;

const ContentDiv = styled.div`
  width: 100%;

  min-height: 30vh;
  padding: 8px 32px;
  display: grid;
  grid-template-rows: ;
  row-gap: 16px;
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

  return(
  	<ListsContainer>
	    <ul className={styles.tabs}>
        {children.map((tab) => (
          <li className={tab.props.label === activeTab ? styles.current : ""} 
          key={tab.props.label}>
            <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
          </li>
        ))}
	    </ul>

      {contentTab}
  	</ListsContainer>
  )
}

export default Tabs
