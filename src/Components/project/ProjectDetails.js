import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as projectService from '../../services/projectService.js';
import { AuthContext } from "../../contexts/AuthContext";

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
    })

    return (
        <li className="h2tag">
            <h4>Project Title: {project.title}</h4>
            <p>Contractor: {project.contractor}</p>
            <p>Location: {project.location}</p>
            <p>Start Date: {project.startDate}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Description: {project.description}</p>
            <p>Lead: {project.lead}</p>
            <img width="350" src={project.imageUrl} />
            <Link to={`/${projectId}/edit`} className="atag">Edit Project</Link>
            <Link to={`/${projectId}/delete`} className="atag">Delete Project</Link>
        </li>
    )
}

export default ProjectDetails;