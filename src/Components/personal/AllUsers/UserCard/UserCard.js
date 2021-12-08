import { useState, useEffect } from "react";
import * as authService from '../../../../services/authService';
import { Link } from 'react-router-dom';
// import { useContext } from "react";
// import { AuthContext } from "../../../../contexts/AuthContext";
import './card.css';

const UserCard = ({userInfo}) => {


    const isAuth = Boolean(userInfo)
    const id = userInfo._id;
    
    return (
        <li className="h2tag">
            <h4>Full Name: {`${userInfo.firstName} ${userInfo.lastName}`}</h4>
            <p>Title: {userInfo.title}</p>
            <p>Specialty: {userInfo.specialty}</p>
            { isAuth ?
            <Link className="atag" id={id} to={`/users/${userInfo._id}/details`}>Details</Link>
            : ''
        }
        </li>
    );
};

export default UserCard;