import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as authService from '../../../services/authService';
// import { AuthContext } from "../../../contexts/AuthContext";

const JoinedProjects = () => {
    // const { user } = useContext(AuthContext);
    // const [userInfo, setUserInfo] = useState({});
    const [joinedProjects, setJoinedProjects] = useState({});
    const userId = useParams();

    // useEffect(() => {
    //     authService.getUser(user._id)
    //     .then(userResult => {
    //         setUserInfo(userResult);
    //     })
    // }, [user._id]);

    useEffect(() => {
        authService.getJoinedProjects(userId)
        .then(userResult => {
            setJoinedProjects(userResult);
        })
    }, [userId])

    return (
        <li className="h2tag">
            {/* <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4> */}
            <p>Projects joined: {joinedProjects}</p>
        </li>
    )
}

export default JoinedProjects;