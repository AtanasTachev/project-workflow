import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";
// import { useProjectContext } from '../../../contexts/ProjectContext.js'

import * as projectService from '../../../services/projectService.js';

import ProjectTeam from "./ProjectTeam";

import './card.css'


const ProjectDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // const { addProject } = useProjectContext();

    const [project, setProject] = useState({});
    const { projectId } = useParams();

    useEffect(() => {
        projectService.getOne(projectId)
        .then(projectResult => { 
            setProject(projectResult);  
            // addProject( projectResult);
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
        </>
    )
    console.log(project);

    return (
        <li className="h2tag">
            <h4>Project Title: {project.title}</h4>
            <p>Contractor: {project.contractor}</p>
            <p>Location: {project.location}</p>
            <p>Start Date: {project.startDate}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Description: {project.description}</p>
            <p>Lead: {project.lead}</p>
            {/* <div >Team:  
                <ProjectTeam project={project}/>
            </div> */}

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