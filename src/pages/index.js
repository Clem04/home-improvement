import React from "react"
import styled from "styled-components"

// Components
import Layout from "../components/Layout"
import Navbar from "../components/Navbar"
import ProjectsList from "../components/Projects-List"

const ContentContainer = styled.div`
  width: 100%;
  height: 92vh;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
  	<Layout>
  		<Navbar />
  		<ContentContainer>
  			<ProjectsList />
  		</ContentContainer>
  	</Layout>
  )
}
