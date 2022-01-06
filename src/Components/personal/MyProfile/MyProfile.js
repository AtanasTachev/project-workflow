import { useState, useEffect, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as authService from '../../../services/authService';
import { AuthContext } from "../../../contexts/AuthContext";

const MyProfile = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        authService.getUser(user._id)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [user._id]);

    const deleteHandler = (e) => {
        e.preventDefault();

        authService.deleteUser( user._id )
            .then(() => {
                navigate('/');
            })
    }

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