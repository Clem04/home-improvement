import React, { useState } from 'react';
import { navigate } from 'gatsby';

// Components
import Layout from "../components/Layout"

export default function NewProject() {

	const [projectForm, setProjectForm] = useState({
		projectTitle: '',
		clientName: '',
		description: '',
		estimatedEffort: '',
		actualEffort: ''
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
  			.then(() => navigate("/"))
  			.catch((error) => {
        		console.error("Cannoe add new project", error);
    		});
    }

  	return (
		<Layout>
  			<form onSubmit={handleSubmit}>
		        <label>
		          Project Title:
		          <input type="text" name="projectTitle" onChange={handleChange} />
		        </label>
		        <label>
		          Client Name:
		          <input type="text" name="clientName" onChange={handleChange} />
		        </label>
		        <label>
		          Estimated Level of Effort:
		          <input type="text" name="estimatedEffort" onChange={handleChange} />
		        </label>
		        <label>
		          Description:
		          <input type="text" name="description" onChange={handleChange} />
		        </label>
		        <input type="submit" value="Submit" />
		    </form>
  		</Layout>
	);
}
