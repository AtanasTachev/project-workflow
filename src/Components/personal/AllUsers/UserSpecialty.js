import UserCard from "./UserCard/UserCard";
import { useState, useEffect } from "react";
import * as authService from '../../../services/authService';

const UserSpecialty = () => {

    const [users, setUsers] = useState([]);


    useEffect(()=> {
        authService.getAllUsers()
        .then(result => {
            setUsers(result);
        })
    }, []);


    return (
        <ul>
            {users.map(x => <UserCard key={x._id} userInfo={x} />)}
        </ul>
    );
};
export default UserSpecialty;