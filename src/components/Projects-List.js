import React, { useState } from "react"
import styled from "styled-components"

// Import component
import ProjectCard from "./Project-Card"

const GridList = styled.div`
  width: 80%;
  height auto;
  background-color: pink;
  display: grid;
  grid-template-rows: 1fr;
  row-gap: 16px;
`


const ProjectsList = () => {

  const [projectList, setProjectList] = useState(
    [
      {
        id: 1,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'This is a desciption of project 1'
      },
      {
        id: 2,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'This is a description of project 2'
      }
    ]
  )

  console.log(projectList)

  // const handleCompleted = (id) => {
  //   alert('test test')
  //   console.log(id)
  // }

  let projectsCompleted = projectList.filter(project => {
      return project.completed === true;  
  }) ;

  let projectsStarted = projectList.filter(project => {
      return project.completed === false;  
  }) ;

  const completedList = projectsCompleted.map((project, id) => (
    <ProjectCard 
      key={id}
      title={project.projectTitle}
      client={project.clientName}
      date={project.dateCreated}
      completed={project.completed}
      estimate={project.estimatedEffortLevel}
      actual={project.actualEffortLevel}
      description={project.description}
    />
  ))

  const startedList = projectsStarted.map((project, id) => (
    <ProjectCard 
      key={id}
      title={project.projectTitle}
      client={project.clientName}
      date={project.dateCreated}
      completed={project.completed}
      estimate={project.estimatedEffortLevel}
      actual={project.actualEffortLevel}
      description={project.description}
    />
  ))

  return (
  	<GridList>
      {completedList}
      {startedList}
    </GridList>
  )
}

export default ProjectsList