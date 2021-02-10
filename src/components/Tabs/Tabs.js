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
  padding: 24px 0px;
  display: grid;
  grid-template-rows: ;
  row-gap: 16px;
  @media (max-width: 414px) {
    padding: 0;
  }
`;

// const TabLink = styled.a`
//   width:calc(100% / 2);
//   font-size: 20px;
//   color: blue;
//   text-decoration: none;
// `;


const Tabs = ({ children }) => {

  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  }

  // const tabLabel = children.map((tab) => (
  //   <li className={tab.props.label === activeTab ? styles.activeTab : styles.tabList} 
  //   key={tab.props.label}>

  //     <a href="#" 
  //       className={styles.activeLink}
  //       onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
  //   </li>
  // ))

  const tabLabel = children.map((tab) => (
      <a href="/#" 
        key={tab.props.label}
        className={`styles.link 
          ${tab.props.label === activeTab ? 
          styles.activeTab : ""}`}
        onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a>
  ))

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
	    <nav className={styles.tabs}>
        {tabLabel}
        <div className={styles.indicator}></div>
	    </nav>

      {contentTab}
  	</ListsContainer>
  )
}

export default Tabs
