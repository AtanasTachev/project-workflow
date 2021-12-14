import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import * as projectService from '../../../services/projectService.js';


import './card.css'


const ProjectDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [project, setProject] = useState({});
    const [team, setTeam] = useState({});
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
        projectService.getTeam(projectId)
        .then(projectResult => {
            setTeam(projectResult);
        })
        .catch(error => {
            console.log(error);
        })
    }, [projectId]);
    
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
            navigate('/');
        })
    }
    
    const leaveHandler = (e) => {
        e.preventDefault();
        
        projectService.leaveProject( projectId )
        .then(() => {
            navigate('/');
        })
    }
    // console.log(project);

    const ownerButtons = (
        <>
            <Link to={`/edit/${projectId}`} className="aBlueTag">Edit Project</Link>
            <Link to={`/delete/${projectId}`} onClick={deleteHandler} className="aRedTag">Delete Project</Link>
        </>
    )

    const userButtons = (
        <>
            <Link to={`/join/${projectId}`} onClick={joinHandler} className="aBlueTag">Join Project</Link>
            <Link to={`/leave/${projectId}`} onClick={leaveHandler} className="aRedTag">Leave Project</Link>
            <Link to={`/team/${projectId}`} className="aBlueTag">Project Team</Link>
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
            {/* <p>Team: {team}</p> */}

            <img width="350" src={project.imageUrl} alt="projectImg"/>
            {user._id && user._id === project.creator
                ? ownerButtons
                : userButtons
            }
        </li>
    )
}

export default ProjectDetails;