import React, { useState } from 'react';
import styled from "styled-components"

// import { navigate } from 'gatsby';

// Components
import Layout from "../components/Layout"

const Form = styled.form`
  width: 50%;
  height: auto;
  margin: 16px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  box-shadow: 1px 3px 19px rgba(0, 0, 0, 0.19);
`
const FormSection = styled.div`
	width: 80%;
`
const Label = styled.p`
	width: 100%;
	font-size: 18px;
	margin: 12px 0 8px 0;
	text-align: start;
`

const Input = styled.input`
	width: 100%;
	height: 40px;
	text-align: start;
	padding: 0;
	border: 1px solid blue;
	border-radius: 2px;
`

const DescriptionBox = styled.textarea`
	width: 100%;
	height: 130px;
	text-align: start;
	border: 1px solid blue;
	border-radius: 2px;
	padding: 0;
`
const SubmitBtn = styled.input.attrs({ 
  type: 'submit',
  value: 'Submit'
})`
  width: 100%;
  padding: 16px 0;
  margin-top: 16px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 2px;
`
export default function NewProject() {

	const [projectForm, setProjectForm] = useState({
		projectTitle: '',
		clientName: '',
		description: '',
		estimatedEffort: '',
		actualEffort: '',
		myData: 'yes'
	});

	const handleChange = (event) => {
	    const updatedProjectForm = {
	      ...projectForm,
	    }

	    const {name, value} = event.target
	    
	    updatedProjectForm[name] = value
	    
	    setProjectForm(updatedProjectForm)
  	}

  	const handleSubmit = (e) => {
  		e.preventDefault();
  		const today = new Date()
        const data = {
            ...projectForm,
	      	creationDate: today,
	      	status: "STARTED"
        };
        fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({...data}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			}
		})
			.then((response) => response.json())
  			.then((response) => console.log(response))
  			// .then(() => navigate("/"))
  			.catch((error) => {
        		console.error("Cannot add new project", error);
    		});
    }

  	return (
		<Layout>
			
	  			<Form onSubmit={handleSubmit}>
	  				<FormSection>
	  					<h1 style={{margin: "0"}}>Create Project</h1>
	  				</FormSection>
	  				<FormSection>
				        <label>
					        <Label>Project Title:</Label>
					        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
					        <Input type="text" name="projectTitle" onChange={handleChange} />
				        </label>
	  				</FormSection>
	  				<FormSection>
				        <label>
					        <Label>Client Name:</Label>
					        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
					        <Input type="text" name="clientName" onChange={handleChange} />
				        </label>
	  				</FormSection>
	  				<FormSection>
				        <label>
					        <Label>Estimated level of effort:</Label>
					        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
					        <Input type="text" name="estimatedEffort" onChange={handleChange} />
				        </label>
	  				</FormSection>
	  				<FormSection>
				        <label>
					        <Label>Description:</Label>
					        <>{ /* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }</>
					        <DescriptionBox rows="10" type="text" name="description" onChange={handleChange}>
					        </DescriptionBox>
				        </label>
	  				</FormSection>
	  				<FormSection>
			        	<SubmitBtn />
	  				</FormSection>
			    </Form>
			
  		</Layout>
	);
}
