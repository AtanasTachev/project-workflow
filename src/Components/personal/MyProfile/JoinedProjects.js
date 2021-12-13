import { useState, useEffect, useContext } from "react";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const JoinedProjects = () => {
    const { user } = useContext(AuthContext);
    // const [userInfo, setUserInfo] = useState({});
    const [joinedProjects, setJoinedProjects] = useState({});

    // useEffect(() => {
    //     authService.getUser(user._id)
    //     .then(userResult => {
    //         setUserInfo(userResult);
    //     })
    // }, [user._id]);

    useEffect(() => {
        authService.getMyProjects(user._id)
        .then(userResult => {
            setJoinedProjects(userResult);
        })
    }, [user._id])

    return (
        <li className="h2tag">
            {/* <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4> */}
            {/* <p>Projects joined: {joinedProjects}</p> */}
        </li>
    )
}

export default JoinedProjects;