import '../App.css';
import {Link} from 'react-router-dom'

const Navigation = () => {
    return (<nav className="nav">
        <h2 className="h2tag" href="/" >Project Workflow</h2>
        <ul> 
            <Link to="/search" className="atag">Search</Link>
            <Link to="/login" className="atag">Login</Link>
            <Link to="/register" className="atag">Register</Link>
            <Link to="/my-profile" className="atag">My profile</Link>
        </ul>
    </nav>);
}

export default Navigation