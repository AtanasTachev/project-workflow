import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as authService from '../../../../../services/authService';

const ProjectsInvolved = () => {

    const { userId } = useParams();

    const [user, setUser] = useState({});
    const [joinedProjects, setJoinedProjects] = useState({});
    const [myProjects, setMyProjects] = useState({});
    
        useEffect(() => {
        authService.getUser(userId)
        .then(userResult => {
            setUser(userResult);
            setJoinedProjects(userResult.projectsJoined);
            setMyProjects(userResult.myProjects);
        })
    }, [userId])

    return (
        <div className="h2tag">
            <h4>Name: {`${user.title}${user.firstName} ${user.lastName}`}</h4>
            <p>Specialty: {user.specialty}</p>
            <ul> <h4>Projects Joined</h4> 
                { joinedProjects.length > 0 
                ? joinedProjects.map( x => <li className="list" key={x._id}>{x.title}</li>)
                : <li className="list">No projects joined jet!</li>
                }
            </ul>
            <ul> <h4>My Projects</h4> 
                { myProjects.length > 0 
                ? myProjects.map( x => <li className="list" key={x._id}>{x.title}</li>)
                : <li className="list">No projects created jet!</li>
                }
            </ul>
        </div>
    )

}

export default ProjectsInvolved;
