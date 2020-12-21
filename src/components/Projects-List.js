import React, { useState } from "react"
import styled from "styled-components"

// Import components
import ProjectCard from "./Project-Card"
import Tabs from './Tabs'

const GridList = styled.div`
  width: 80%;
  height auto;
  background-color: pink;
`
const Tab = styled.div`
  width: 100%;
  height: auto;
`;


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
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 2,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 3,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 4,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 5,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: true,
        estimatedEffortLevel: 8,
        actualEffortLevel: 10,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 6,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 7,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 8,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 9,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
      },
      {
        id: 10,
        projectTitle: 'Project Title',
        clientName: 'Michel Jamati',
        dateCreated: '12 days ago',
        completed: false,
        estimatedEffortLevel: 6,
        actualEffortLevel: 0,
        description: 'Sit elit nisi dolor exercitation est esse tempor dolore in labore cillum ea sit. Non magna dolor fugiat cupidatat sint ullamco nisi ut qui ex pariatur qui esse incididunt excepteur labore.Culpa sint in pariatur pariatur nisi exercitation in ut elit sunt ut. Nulla excepteur et officia id id qui ut nisi non ex reprehenderit cupidatat laboris. Qui labore in ullamco qui aliquip duis anim adipisicing magna veniam aliqua qui consectetur mollit magna nisi elit. Ut esse aute esse pariatur voluptate commodo elit adipisicing eu sit. Ad dolor irure anim culpa anim velit dolore reprehenderit excepteur aliquip aliquip esse nisi. Voluptate proident non consequat fugiat est nisi proident dolor cupidatat irure occaecat eiusmod veniam proident exercitation. Eu culpa laborum quis excepteur non adipisicing do ut irure tempor qui consequat elit est in ea non. Est aliqua anim do quis esse in veniam ex consectetur ex sit et aute deserunt in esse.'
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