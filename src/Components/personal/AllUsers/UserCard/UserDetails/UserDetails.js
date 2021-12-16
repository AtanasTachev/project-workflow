import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import * as authService from '../../../../../services/authService';

const UserDetails = () => {
    const {userId} = useParams();
    
    const [userInfo, setUserInfo] = useState({});


    useEffect(() => {
        authService.getUser(userId)
        .then(userResult => {
            setUserInfo(userResult);
        })
    }, [userId]);


     return (
        <li className="h2tag">
            <h4>Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            <p>Email: {userInfo.email}</p>
            <Link to={`/users/projectsInvolved/${userInfo._id}`} className="aBlueTag">Projects Involved</Link>
        </li>
    )
}

export default UserDetails;