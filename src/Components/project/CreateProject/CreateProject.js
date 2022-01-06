import { useNavigate } from 'react-router-dom';
import * as projectService from '../../../services/projectService'
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import { useNotificationContext, types } from '../../../contexts/NotificationContext'


import './form.css';

const CreateProject = () => {

    const { user } = useContext(AuthContext);
    
    const navigate = useNavigate();
    const { addNotification } = useNotificationContext();
    let err;

    
    const onProjectCreate = (e) => {
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
        const creator = user._id

        if(title === '' || contractor === '' || location === '' || 
            startDate === '' || dueDate === '' || imageUrl === '' 
            || description === '' || lead === '') {
                addNotification('Fields cannot be empty', types.warn)
            return;
        }

        if(title.length < 6) {
            err = 'Title should be at least 6 characters long!'
            return;
        }


        projectService.create({title, contractor, location, startDate, dueDate, imageUrl, description, lead, creator}).then(result => {
            addNotification('You successfully added a project!', types.success);
        navigate('/');
        })
        .catch(error => {
            addNotification([`${error.message}`, err], types.warn)
        });
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

export default CreateProject;