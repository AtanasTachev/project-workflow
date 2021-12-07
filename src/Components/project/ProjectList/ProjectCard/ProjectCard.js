
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import './card.css';

const ProjectCard = ({project}) => {

    const { user } = useContext(AuthContext);
    const isAuth = Boolean(user._id)


    return (
        <li className="h2tag">
            <h4>Project Title: {project.title}</h4>
            <p>Location: {project.location}</p>
            <p>Lead: {project.lead}</p>
            <img width="350" height="200" src={project.imageUrl} alt="projectImg"/>
            { isAuth ?
            <Link className="atag" to={`/projects/${project._id}/details`}>Details</Link>
            : ''
            }
        </li>
    );
};

export default ProjectCard;