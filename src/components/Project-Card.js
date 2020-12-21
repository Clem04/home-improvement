import React from "react"
import styled from "styled-components"

import styles from './Card.module.css'

const Card = styled.div`
  width: 100%;
  height: auto;
  border: 3px solid black;
`

const CompletedBtn = styled.button`
  color: black;
  border: none;
`


const ProjectCard = ({title, client, date, description, completed, estimate, actual}) => {

  const statusBtn = () => {
    if(completed === true){

      return <CompletedBtn className={styles.completed} onClick={() => alert('STARTED')}>
                COMPLETED
             </CompletedBtn>
    } else{

      return <CompletedBtn className={styles.started} onClick={() => alert('COMPLETED')}>
                STARTED
             </CompletedBtn>
    }
  }

  return (
    <Card>
    	<p>{title}</p>
      <p>{client}</p>
      <p>{date}</p>
      <p>{description}</p>
      {statusBtn()}
      <p>{estimate}</p>
      <p className={actual > 0 ? styles.actual : styles.hide}>{actual}</p>
      <button>delete</button>
      <button>edit</button>
    </Card>
  )
}

export default ProjectCard