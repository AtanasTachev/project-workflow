import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import * as projectService from '../../../services/projectService.js';
import * as authService from '../../../services/authService.js';
import {  } from '../../../contexts/NotificationContext'

import './card.css'


const ProjectDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const [project, setProject] = useState({});
    const [joinedP, setJoinedP] = useState({});

    const { projectId } = useParams();

    useEffect(() => {
        projectService.getOne(projectId)
        .then(projectResult => { 
            setProject(projectResult);  
        })
        .catch(error => {
            console.log(error);
        })
    }, [projectId]);

    useEffect(() => {
        authService.getUser(user._id)
        .then(userResult => { 
            setJoinedP(userResult.projectsJoined);  
        })
        .catch(error => {
            console.log(error);
        })
    }, [user._id]);

   
    const deleteHandler = (e) => {
        e.preventDefault();
        
        projectService.deleteProject( projectId )
        .then(() => {
            navigate('/');
        })
    }
    
    const joinHandler = (e) => {
        e.preventDefault();
        
        projectService.joinProject( projectId, user._id )
        .then(() => {
            // setProject({...state, state.projectsJoined })
            navigate(`/projects/details/${projectId}`);

        })
    }
    
    const leaveHandler = (e) => {
        e.preventDefault();
        
        projectService.leaveProject( projectId, user._id )
        .then(() => {
            navigate(`/projects/details/${projectId}`);
        })
    }

    let hasJoined = '';

    if(joinedP.length > 0) {
        let joinedIds = joinedP.map(x => x._id);
        hasJoined = joinedIds.includes(projectId);
    }

    const ownerButtons = (
        <>
            <Link to={`/edit/${projectId}`} className="aBlueTag">Edit Project</Link>
            <Link to={`/delete/${projectId}`} onClick={deleteHandler} className="aRedTag">Delete Project</Link>
        </>
    )

    const userButtons = (
        <>
            { hasJoined
                ?
                <Link to={`/leave/${projectId}`} onClick={leaveHandler} className="aRedTag">Leave Project</Link>
                :<Link to={`/join/${projectId}`} onClick={joinHandler} className="aBlueTag">Join Project</Link>
            }
        </>
    )

    return (
        <li className="h2tag">
            <h4>Project Title: {project.title}</h4>
            <p>Contractor: {project.contractor}</p>
            <p>Location: {project.location}</p>
            <p>Start Date: {project.startDate}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Description: {project.description}</p>
            <p>Lead: {project.lead}</p>

            <img width="350" src={project.imageUrl} alt="projectImg"/>
            {user._id && user._id === project.creator
                ? ownerButtons
                : userButtons
            }
            <Link to={`/team/${projectId}`} className="aBlueTag">Show Team</Link>

        </li>
    )
}

export default ProjectDetails;