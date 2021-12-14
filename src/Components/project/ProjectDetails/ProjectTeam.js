import { useState, useEffect, useContext, useLayoutEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

import * as projectService from '../../../services/projectService.js';


import './card.css'


const ProjectTeam = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    // const [project, setProject] = useState({});
    const [team, setTeam] = useState({});
    const { projectId } = useParams();

    // useEffect(() => {
    //     projectService.getOne(projectId)
    //     .then(projectResult => {
    //         setProject(projectResult);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }, [projectId]);

    useEffect(() => {
        projectService.getTeam(projectId)
        .then(projectResult => {
            setTeam(projectResult);
        })
        .catch(error => {
            console.log(error);
        })
    }, [projectId]);
    

    return (
        <li className="h2tag">
            {/* <h4>Project Title: {project.title}</h4> */}
            <p>Team: {team}</p>
        </li>
    )
}

export default ProjectTeam;