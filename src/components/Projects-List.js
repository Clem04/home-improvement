import React from "react"
import styled from "styled-components"

// Import components
import ProjectCard from "./Project-Card"
import Tabs from './Tabs'

const GridList = styled.div`
  width: 60%;
  height: auto;
  background-color: white;
  margin: 32px 0 ;
  @media only screen and (max-width: 1024px) and (min-width: 320px) {
    width: 90%;
  }
`
const Tab = styled.div`
  width: 100%;
  height: auto;
`;


const ProjectsList = () => {

  const projects = 
    [
      {
        id: 1,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 2,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 3,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 4,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 5,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 6,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 7,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 8,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 9,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      },
      {
        id: 10,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation.'
      }
    ]

  console.log(projects)

  // const handleCompleted = (id) => {
  //   alert('test test')
  //   console.log(id)
  // }

  let projectsCompleted = projects.filter(project => {
      return project.completed === true;  
  }) ;

  let projectsStarted = projects.filter(project => {
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
      <Tabs>
        <Tab label="STARTED">
          {startedList}
        </Tab>
        <Tab label="COMPLETED">
          {completedList}
        </Tab>
      </Tabs>
    </GridList>
  )
}

export default ProjectsList