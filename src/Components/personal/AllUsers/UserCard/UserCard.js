import { Link } from 'react-router-dom';

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
            <Link className="atag" id={id} to={`/users/details/${userInfo._id}`}>Details</Link>
            : ''
        }
        </li>
    );
};

export default UserCard;