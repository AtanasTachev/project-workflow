import { useState, useEffect } from "react";
import * as projectService from '../../../services/projectService';
import ProjectCard from "./ProjectCard/ProjectCard";

const ProjectList = () => {

    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        projectService.getAll()
        .then(result => {
            setProjects(result);
        })
    }, []);

    const empty = Boolean(projects.length)

    return (
        (empty) ?
            (<ul>
                {projects.map(x => <ProjectCard key={x._id} project={x} />)}
            </ul>)
            : <h3>No projects in database!</h3>
        
    );
    };
    export default ProjectList;