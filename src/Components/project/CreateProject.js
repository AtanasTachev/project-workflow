import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as projectService from '../../services/projectService'

import '../../register-login.css';

const CreateProject = () => {

    const navigate = useNavigate();

const onProjectCreate = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currenttarget);
    let title = formData.get('title');
    let contractor = formData.get('contractor');
    let location = formData.get('location');
    let startDate = formData.get('startDate');
    let dueDate = formData.get('dueDate');
    let imageUrl = formData.get('imageUrl');
    let description = formData.get('description');
    let lead = formData.get('lead');

    projectService.create({
        title,
        contractor,
        location,
        startDate,
        dueDate,
        imageUrl,
        description,
        lead
    })
    .then(result => {
        navigate('/');
    })
}
    return (

<section id="login-page">

    <div className="loginSection">
        <div className="info">
            <h2>Let's create a project</h2>
            <p>Create a project step by step.</p>
        </div>
        <form method="POST" className="loginForm" onSubmit={onProjectCreate}>
            <h2>Create Project</h2>
            <ul className="noBullet">
                <li>
                    <label htmlFor="title">Title:</label>
                    <input type="text" className="inputFields" id="title" name="title" placeholder="My Project" />
                </li>
                <li>
                    <label htmlFor="contractor">Contractor:</label>
                    <input type="text" className="inputFields" id="contractor" name="contractor" placeholder="Contractor" />
                </li>
                <li>
                    <label htmlFor="location">Location:</label>
                    <input type="text" className="inputFields" id="location" name="location" placeholder="Location" />
                </li>
                <li>
                    <label htmlFor="startDate">Start Date:</label>
                    <input type="text" className="inputFields" id="startDate" name="startDate" placeholder="Start Date" />
                </li>
                <li>
                    <label htmlFor="dueDate">Due Date:</label>
                    <input type="text" className="inputFields" id="dueDate" name="dueDate" placeholder="Due Date" />
                </li>
                <li>
                    <label htmlFor="imageUrl">Image Url:</label>
                    <input type="text" className="inputFields" id="imageUrl" name="imageUrl" placeholder="Image Url" />
                </li>
                <li>
                    <label htmlFor="description">Description:</label>
                    <input type="text" className="inputFields" id="description" name="description" placeholder="Description" />
                </li>
                <li>
                    <label htmlFor="lead">Lead:</label>
                    <input type="text" className="inputFields" id="lead" name="lead" placeholder="Lead" />
                </li>



                <li id="center-btn">
                    <button id="login-btn">Create Project</button>
                </li>
            </ul>
        </form>
    </div>

</section>
    )
}

export default CreateProject