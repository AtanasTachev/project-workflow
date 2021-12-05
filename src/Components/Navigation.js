import '../App.css';
import {Link} from 'react-router-dom'
import { useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';



const Navigation = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (<nav className="nav">
        <Link to="/" className="h2tag"> Project Workflow </Link>
        <ul> 
            <Link to="/" className="atag"> Home </Link>
            { user.email  ?
              <>
              <p className="atag">Welcome {user.email} </p>
            <Link to="/search" className="atag">Search</Link>
            <Link to="/create-project" className="atag">Create Project</Link>
            <Link to="/my-profile" className="atag">My profile</Link> 
            <Link to="/logout" className="atag">Logout</Link> </>
            :
            <>
            <Link to="/login" className="atag">Login</Link>
            <Link to="/register" className="atag">Register</Link>
            </>
            }
        </ul>
    </nav>);
}

export default Navigation