import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as authService from '../../../../../services/authService';

const UserDetails = () => {
    const {userId} = useParams();
    
    const [userInfo, setUserInfo] = useState({});

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