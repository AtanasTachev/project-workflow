import { useState, useEffect, useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const MyProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});
    const [joinedProjects, setjoinedProjects] = useState({});
    const [myProjects, setmyProjects] = useState({});
    // const userId = useParams();

    useEffect(() => {
        authService.getUser(user._id)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [user._id]);

    // useEffect(() => {
    //     authService.getJoinedProjects(user._id)
    //     .then(userResult => {
    //         setjoinedProjects(userResult);
    //     })
    // }, [user._id])

    // useEffect(() => {
    //     authService.getMyProjects(user._id)
    //     .then(userResult => {
    //         setmyProjects(userResult);
    //     })
    // }, [user._id])

    const deleteHandler = (e) => {
        e.preventDefault();

        authService.deleteUser( user._id )
            .then(() => {
                navigate('/');
            })
    }

    // console.log(myProjects, joinedProjects);
    return (
        <li className="h2tag">
            <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            <p>Email: {userInfo.email}</p> 
            <Link to={`/delete/${user._id}`} onClick={deleteHandler} className="aRedTag">Delete User</Link>
            <Link to={`/users/projectsInvolved/${user._id}`} className="aBlueTag">Projects Involved</Link>
        </li>
    )
}

export default MyProfile;