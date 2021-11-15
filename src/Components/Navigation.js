import '../App.css';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (<nav className="nav">
        <Link to="/" className="h2tag"> Project Workflow </Link>
        <ul> 
            <Link to="/" className="atag"> Home </Link>
            <Link to="/search" className="atag">Search</Link>
            <Link to="/create-project" className="atag">Create Project</Link>
            <Link to="/edit-project" className="atag">Edit Project</Link>
            <Link to="/login" className="atag">Login</Link>
            <Link to="/register" className="atag">Register</Link>
            <Link to="/my-profile" className="atag">My profile</Link>
        </ul>
    </nav>);
}

export default Navigation