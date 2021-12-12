import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as authService from '../../../services/authService';
// import * as projectService from '../../../services/projectService';
import { AuthContext } from "../../../contexts/AuthContext";

const MyProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    // const [projectInfo, setProjectInfo] = useState({});
        
    // const userId = useParams();
    // console.log(userId);
    // console.log(user);

    useEffect(() => {
        authService.getUser(user._id)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [user._id])

    const deleteHandler = (e) => {
        e.preventDefault();

        authService.deleteUser( user._id )
            .then(() => {
                navigate('/');
            })
    }
// console.log(userInfo);
    // const myJoinedProjects = userInfo.getJoinedProjects();


    return (
        <li className="h2tag">
            <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            <p>Email: {userInfo.email}</p>
            <p>Projects joined: {}</p>
            <p>My projects: {}</p>
            <Link to={`/${user._id}/delete`} onClick={deleteHandler} className="aRedTag">Delete User</Link>
        </li>
    )
}

export default MyProfile;