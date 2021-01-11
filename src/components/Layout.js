import React from "react"
import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

import Navbar from "./Navigation/Navbar"

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    text-align: center;
  }
`

const ContentContainer = styled.div`
  width: 100%;
  min-height: 92vh;
  height: auto;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default function Layout({ children }) {
  return (
    <React.Fragment>
      <Navbar />
      <ContentContainer>
        <GlobalStyle />
        {children}
      </ContentContainer>
    </React.Fragment>
  )
}