import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import * as authService from '../../../../services/authService';

import './card.css';

const UserCard = ({userInfo}) => {

    const [sortedUsers, setSortedUsers] = useState([]);

    const isAuth = Boolean(userInfo)
    const id = userInfo._id;
    // console.log(userInfo.specialty);

    useEffect(()=> {
        authService.getSortedUsers(userInfo.specialty)
        .then(result => {
            setSortedUsers(result);
        })
    }, []);

    // console.log(sortedUsers);
    
    return (
        <li className="h2tagList">
            <h4>Full Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            { isAuth ?
            <Link className="atag" id={id} to={`/users/details/${userInfo._id}`}>Details</Link>
            : ''
        }
        </li>
    );
};

export default UserCard;