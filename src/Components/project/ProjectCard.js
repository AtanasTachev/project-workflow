import { Link } from 'react-router-dom';

const projectCard = ({
    project
}) => {
    return (
        <li>
            <h3>Project Title: {project.title}</h3>
            <p>Location: {project.location}</p>
            <p>Lead: {project.lead}</p>
            <img src={project.imageUrl} />
            <Link to={`/details/${project.id}`}>Details</Link>
        </li>
    );
};

export default projectCard;