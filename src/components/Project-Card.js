import React from "react"
import styled from "styled-components"

import styles from './Card.module.css'

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
 `
 const ProjectText = styled.div`
  width: 60%;
  padding-right: 24px;
 `

 const ProjectLevelOfEffort = styled(ProjectTitle)`
  width: 40%;
  flex-wrap: wrap;
  align-items: flex-start;
  border-bottom: none;
 `
 const EstimateBox = styled.div`
  width: 50%;
  border: 1px solid black;
 `


const CompletedBtn = styled.button`
  width: 100%;
  margin-top: 16px;
  background-color: white;
  color: green;
  border: 1px solid green;
  padding: 8px 0;
  border-radius: 2px;
`
const StartedBtn = styled(CompletedBtn)`
  border: 1px solid red;
  color: red;
`


const ProjectCard = ({title, client, date, description, completed, estimate, actual}) => {

  const statusBtn = () => {
    if(completed === true){

      return <CompletedBtn className={styles.completed} onClick={() => alert('STARTED')}>
                COMPLETED
             </CompletedBtn>
    } else{

      return <StartedBtn onClick={() => alert('COMPLETED')}>
                STARTED
             </StartedBtn>
    }
  }

  return (
    <Card>
      <Container>
        <ProjectTitle>
        	<h2>{title}</h2>
          <div style={{width: "50%", display: "flex", justifyContent: "flex-end"}}>
            <button>delete</button>
            <button>edit</button>
          </div>
        </ProjectTitle>
        <ProjectClient>
          <p>{client}</p>
          <p>{date}</p>
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