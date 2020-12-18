import React from "react"
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

const projects = [
  {
    projectTitle: 'Project Title',
    clientName: 'Michel Jamati',
    dateCreated: '12 days ago',
    status: 'STARTED',
    estimatedEffortLevel: 6,
    actualEffortLevel: 0,
    description: 'This is a desciption of project 1'
  },
  {
    projectTitle: 'Project Title',
    clientName: 'Michel Jamati',
    dateCreated: '12 days ago',
    status: 'COMPLETED',
    estimatedEffortLevel: 8,
    actualEffortLevel: 10,
    description: 'This is a description of project 2'
    }
]

const ProjectsList = () => {

  return (
  	<GridList>
        {projects.map((project, index) => (
          <ProjectCard 
            title={project.projectTitle}
            client={project.clientName}
            date={project.dateCreated}
            status={project.status}
            estimate={project.estimatedEffortLevel}
            actual={project.actualEffortLevel}
            description={project.description}
          />
        ))}
    </GridList>
  )
}

export default ProjectsList