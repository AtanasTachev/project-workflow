import { useState, useEffect, useContext } from "react";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const MyProjects = () => {
    const { user } = useContext(AuthContext);
    // const [userInfo, setUserInfo] = useState({});
    const [myProjects, setMyProjects] = useState({});

    // useEffect(() => {
    //     authService.getUser(user._id)
    //     .then(userResult => {
    //         setUserInfo(userResult);
    //     })
    // }, [user._id]);

    useEffect(() => {
        authService.getMyProjects(user._id)
        .then(userResult => {
            setMyProjects(userResult);
        })
    }, [user._id])

    return (
        <li className="h2tag">
            {/* <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4> */}
            <p>My Projects: {myProjects}</p>
        </li>
    )
}

export default MyProjects;