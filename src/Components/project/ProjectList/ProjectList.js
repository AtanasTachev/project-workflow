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

    return (
        <ul>
            {projects.map(x => <ProjectCard key={x._id} project={x} />)}
        </ul>
    );
    };
    export default ProjectList;