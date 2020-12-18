import React from "react"
import styled from "styled-components"

import styles from './Card.module.css'

const Card = styled.div`
  width: 100%;
  height: auto;
  border: 3px solid black;
`

const StatusBtn = styled.button`
  color: black;
  background-color: white;
  border: none;
`


const ProjectCard = ({title, client, date, description, status, estimate, actual}) => {

  return (
    <Card>
    	<p>{title}</p>
      <p>{client}</p>
      <p>{date}</p>
      <p>{description}</p>
      <StatusBtn className={status === "COMPLETED" ? styles.completed : ""} disabled>
        {status}
      </StatusBtn>
      <p>{estimate}</p>
      <p className={actual > 0 ? styles.actual : styles.hide}>{actual}</p>
      <button>delete</button>
      <button>edit</button>
    </Card>
  )
}

export default ProjectCard