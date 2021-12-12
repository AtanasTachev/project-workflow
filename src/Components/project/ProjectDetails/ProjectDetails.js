import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as projectService from '../../../services/projectService.js';
import { AuthContext } from "../../../contexts/AuthContext";
import { isAuth } from '../../../hoc/isAuth';

import './card.css'


const ProjectDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [project, setProject] = useState({});
    const { projectId } = useParams();

    useEffect(() => {
        projectService.getOne(projectId)
        .then(projectResult => {
            setProject(projectResult);
        })
    }, [projectId])

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
    // console.log(user._id);
    let team = project.team;
    // console.log(team);
    // const isJoined = team.some( x => x === user._id);

    const ownerButtons = (
        <>
            <Link to={`/${projectId}/edit`} className="aBlueTag">Edit Project</Link>
            <Link to={`/${projectId}/delete`} onClick={deleteHandler} className="aRedTag">Delete Project</Link>
        </>
    )

    const userButtons = (
        <>
            <Link to={`/${projectId}/join`} onClick={joinHandler} className="aBlueTag">Join Project</Link>
            <Link to={`/${projectId}/leave`} onClick={leaveHandler} className="aRedTag">Leave Project</Link>
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
            <p>Team: {project.team}</p>

            <img width="350" src={project.imageUrl} alt="projectImg"/>
            {user._id && user._id === project.creator
                ? ownerButtons
                : userButtons
            }
        </li>
    )
}

export default ProjectDetails;