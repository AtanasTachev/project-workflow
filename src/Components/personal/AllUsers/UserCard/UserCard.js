import { Link } from 'react-router-dom';
// import { useContext } from "react";
// import { AuthContext } from "../../../../contexts/AuthContext";
import './card.css';

const UserCard = ({user}) => {

    // const { user } = useContext(AuthContext);
    const isAuth = Boolean(user)


    return (
        <li className="h2tag">
            <h4>Full Name: {`${user.firstName} ${user.lastName}`}</h4>
            <p>Title: {user.title}</p>
            <p>Specialty: {user.specialty}</p>
            { isAuth ?
            <Link className="atag" to={`/users/${user._id}/details`}>Details</Link>
            : ''
            }
        </li>
    );
};

export default UserCard;