import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";

import { isAuth } from '../../../hoc/isAuth';
import * as projectService from '../../../services/projectService';
import './form.css';

const EditProject = () => {
    
    const [project, setProject] = useState([]);
    const { projectId } = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        projectService.getOne(projectId)
        .then(result => {
            setProject(result);
        })
    }, [projectId]);

    const onProjectEdit = async (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let contractor = formData.get('contractor');
        let location = formData.get('location');
        let startDate = formData.get('startDate');
        let dueDate = formData.get('dueDate');
        let imageUrl = formData.get('imageUrl');
        let description = formData.get('description');
        let lead = formData.get('lead');

    
        await projectService.edit(projectId, title, contractor, location, startDate, dueDate, imageUrl, description, lead).then(result => {
            navigate('/');
        })
    }
    return (

<section id="login-page">

    <div className="loginSection">
        <div className="info">
            <h2>Let's edit a project</h2>
            <p>Edit a project step by step.</p>
        </div>
        <form action="/edit-project" method="PUT" className="loginForm" onSubmit={onProjectEdit}>
            <h2>Edit Project</h2>
            <ul className="noBullet">
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="inputFields" id="title" name="title" placeholder="My Project" defaultValue={project.title || ''}/>
                </li>
                <li>
                    <label htmlFor="contractor">Contractor:</label>
                    <input type="text" className="inputFields" id="contractor" name="contractor" placeholder="Contractor" defaultValue={project.contractor || ''}/>
                </li>
                <li>
                    <label htmlFor="location">Location:</label>
                    <input type="text" className="inputFields" id="location" name="location" placeholder="Location" defaultValue={project.location || ''}/>
                </li>
                <li>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" className="inputFields" id="startDate" name="startDate" placeholder="Start Date" defaultValue={project.startDate || ''}/>
                </li>
                <li>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="text" className="inputFields" id="dueDate" name="dueDate" placeholder="Due Date" defaultValue={project.dueDate || ''}/>
                </li>
                <li>
                    <label htmlFor="imageUrl">Image Url:</label>
                    <input type="text" className="inputFields" id="imageUrl" name="imageUrl" placeholder="Image Url" defaultValue={project.imageUrl || ''}/>
                </li>
                <li>
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="inputFields" id="description" name="description" placeholder="Description" defaultValue={project.description || ''}/>
                </li>
                <li>
                    <label htmlFor="lead">Lead:</label>
                    <input type="text" className="inputFields" id="lead" name="lead" placeholder="Lead" defaultValue={project.lead || ''}/>
                </li>



                <li id="center-btn">
                    <button id="login-btn">Edit Project</button>
                </li>
            </ul>
        </form>
    </div>

</section>
    )
}

export default isAuth(EditProject);