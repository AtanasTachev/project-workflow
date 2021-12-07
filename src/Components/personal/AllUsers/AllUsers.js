import { useState, useEffect } from "react";
import * as authService from '../../../services/authService';
import UserCard from "./UserCard/UserCard";

const AllUsers = () => {

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
export default AllUsers;