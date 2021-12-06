import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const MyProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [project, setProject] = useState({});
    const { projectId } = useParams();

    const userId = user._id;

    useEffect(() => {
        // authService.getOne(userId)
        // .then(userResult => {
        //     setProject(userResult);
        // })
    })

    const deleteHandler = (e) => {
        e.preventDefault();

        // authService.deleteUser( userId )
        //     .then(() => {
        //         navigate('/');
        //     })
    }

     const ownerButtons = (
        <>
            <Link to={`/${userId}/edit`} className="atag">Edit User</Link>
            <Link to={`/${userId}/delete`} onClick={deleteHandler} className="atag">Delete User</Link>
        </>
    )
    return (
        <li className="h2tag">
            <h4>Name: {`${user.firstName} ${user.lastName}`}</h4>
            <p>Contractor: {project.contractor}</p>
            <p>Location: {project.location}</p>
            <p>Start Date: {project.startDate}</p>
            <p>Due Date: {project.dueDate}</p>
            <p>Description: {project.description}</p>
            <p>Lead: {project.lead}</p>
            <img width="350" src={project.imageUrl} />
            {user._id && user._id == project.creator
                ? ownerButtons
                :''
            }
        </li>
    )
}

export default MyProfile;