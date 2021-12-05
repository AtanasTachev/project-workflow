import { useState, useEffect } from "react";
import * as projectService from '../../services/projectService';
import { Link } from 'react-router-dom';
import '../../App.css';

const ProjectCard = ({project}) => {

    return (
        <li className="h2tag">
            <h4>Project Title: {project.title}</h4>
            <p>Location: {project.location}</p>
            <p>Lead: {project.lead}</p>
            <img width="350" src={project.imageUrl} />
            <Link to={`/${project._id}/details`}>Details</Link>
        </li>
    );
};

export default ProjectCard;