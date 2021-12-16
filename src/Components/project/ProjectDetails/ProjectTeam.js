import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as projectService from '../../../services/projectService.js';

import './card.css'

const ProjectTeam = () => {

    const [team, setTeam] = useState({});
    const [project, setProject] = useState({});

    const { projectId } = useParams();

        useEffect(() => {
            projectService.getOne(projectId)
            .then(projectResult => { 
                setProject(projectResult);  
                setTeam(projectResult.team); 
            })
            .catch(error => {
                console.log(error);
            })
        }, [projectId]);

            console.log(team);

        if(!team) { return null };



    return (
        <>
            <h2>Project: {project.title}</h2>
            <div className='h2tag'>Team:  
                {team.length > 0
                    ?(<ul>
                        {team.map(x => <li key={x._id} className='list'>{x.title} {x.firstName} {x.lastName}</li>)}
                    </ul>)
                    : <p>No specialists in team</p>}
            </div>
        </>
    )
}

export default ProjectTeam;
