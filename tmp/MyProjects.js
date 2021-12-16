import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as authService from '../src/services/authService';
// import { AuthContext } from "../../../contexts/AuthContext";

const MyProjects = () => {
    // const { user } = useContext(AuthContext);
    // const [userInfo, setUserInfo] = useState({});
    const [myProjects, setMyProjects] = useState({});

    const userId = useParams();

    // useEffect(() => {
    //     authService.getUser(user._id)
    //     .then(userResult => {
    //         setUserInfo(userResult);
    //     })
    // }, [user._id]);

    useEffect(() => {
        authService.getMyProjects(userId)
        .then(userResult => {
            setMyProjects(userResult);
        })
    }, [userId])

    return (
        <li className="h2tag">
            {/* <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4> */}
            <p>My Projects: {myProjects}</p>
        </li>
    )
}

export default MyProjects;