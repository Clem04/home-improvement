import React from "react"
import styled from "styled-components"
import { FiClock } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

import styles from './Card.module.css'
import CompletedBtn from '../buttons/Completed-Btn'
import StartedBtn from '../buttons/Started-Btn'
import EditDeleteBtn from '../buttons/Edit-Delete-Btn'

const Card = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  box-shadow: 1px 3px 19px rgba(0, 0, 0, 0.19);

  &:hover {
    transform: scale(1.05);
  }
`

const Container = styled.div`
  padding: 16px;
 `

 const ProjectTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  border-bottom: 1px solid grey;
 `
 const ProjectClient = styled(ProjectTitle)`
  border-bottom: none;
  justify-content: flex-start;
 `
const ProjectDescription = styled(ProjectTitle)`
  align-items: flex-start;
  border-bottom: none;
  flex-wrap: nowrap;
  @media only screen and (max-width: 1024px) and (min-width: 320px) {
    flex-wrap: wrap;
  }
 `
 const ProjectText = styled.div`
  width: 60%;
  padding-right: 24px;
  @media only screen and (max-width: 1024px) and (min-width: 320px) {
    width: 100%;
  }
 `

 const ProjectLevelOfEffort = styled(ProjectTitle)`
  width: 40%;
  flex-wrap: wrap;
  align-items: flex-start;
  border-bottom: none;
  @media only screen and (max-width: 1024px) and (min-width: 320px) {
    width: 100%;
  }
 `
 const EstimateBox = styled.div`
  width: 50%;
  border: 1px solid black;
 `


const ProjectCard = ({title, client, date, description, completed, estimate, actual}) => {

  const statusBtn = () => {
    if(completed === true){

      return <CompletedBtn />
    } else{

      return <StartedBtn />
    }
  }

  return (
    <Card>
      <Container>
        <ProjectTitle>
        	<h2>{title}</h2>
          <div style={{width: "38%", display: "flex", justifyContent: "space-between"}}>
            <EditDeleteBtn text={"delete"} />
            <EditDeleteBtn text={"edit"} />
          </div>
        </ProjectTitle>
        <ProjectClient>
          <div>
            <p><FiUser style={{marginRight: "6px", marginBottom: "-3px"}} /><span>{client}</span></p>
          </div>
          <div style={{marginLeft: "16px"}}>
            <p><FiClock style={{marginRight: "6px", marginBottom: "-3px"}} /><span>{date}</span></p>
          </div>
        </ProjectClient>
        <ProjectDescription>
          <ProjectText>
            <p style={{textAlign: "left"}}>{description}</p>
          </ProjectText>
          <ProjectLevelOfEffort>
            <div style={{width: "100%"}}>{statusBtn()}</div>
            <div style={{width: "100%", backgroundColor: "#e0e0e0", 
                        marginTop: "16px", display: "flex"}}>
              <EstimateBox>
                <p style={{marginBottom: "16px"}}>Estimated level of effort</p>
                <p style={{fontSize: "24px", fontWeight: "bold", margin: "6px 0"}}>{estimate}</p>
              </EstimateBox>
              <EstimateBox style={{borderLeft: "1px solid transparent"}}>
                <p style={{marginBottom: "16px"}}>Actual level of effort</p>
                <p className={actual > 0 ? styles.actual : styles.hide}>{actual}</p>
              </EstimateBox>
            </div>
          </ProjectLevelOfEffort>
        </ProjectDescription>
      </Container>
    </Card>
  )
}

export default ProjectCard