import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const UserDetails = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    
    const userId = user._id;

    useEffect(() => {
        authService.getUser(userId)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [userId])

     return (
        <li className="h2tag">
            <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            <p>Email: {userInfo.email}</p>
            <p>Projects joined: {userInfo.projectsJoined}</p>
            <p>My projects: {userInfo.myProjects}</p>
        </li>
    )
}

export default UserDetails;