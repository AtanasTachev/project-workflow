import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as authService from '../../../../../services/authService';

const UserDetails = () => {
    const {userId} = useParams();
    
    const [userInfo, setUserInfo] = useState({});
    const [joinedProjects, setJoinedProjects] = useState({});
    const [myProjects, setMyProjects] = useState({});

    useEffect(() => {
        authService.getUser(userId)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [userId]);

    useEffect(() => {
        authService.getJoinedProjects(userId)
        .then(userResult => {
            setJoinedProjects(userResult);
        })
    }, [userId])

    useEffect(() => {
        authService.getMyProjects(userId)
        .then(userResult => {
            setMyProjects(userResult);
        })
    }, [userId])

    console.log(joinedProjects, myProjects);

     return (
        <li className="h2tag">
            <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            <p>Email: {userInfo.email}</p>
            <Link to={`/myProjects/${userInfo._id}`} className="aBlueTag">My Projects</Link>
            <Link to={`/projectsJoined/${userInfo._id}`} className="aBlueTag">Joined Projects</Link>
            {/* <p>Projects joined: {joinedProjects}</p> */}
            {/* <p>My projects: {myProjects}</p> */}
        </li>
    )
}

export default UserDetails;