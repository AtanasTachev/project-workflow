import {baseUrl} from '../constants';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const getOne = async (projectId) => {
    let response = await fetch(`${baseUrl}/projects/details/${projectId}`);
    let project = await response.json();
    return project;
};

export const getTeam = async(projectId) => {
    try{
        let response = await fetch(`${baseUrl}/projects/details/${projectId}`);
        let project = await response.json();
        const teamString = project.team.map(x => `${x.title} ${x.firstName} ${x.lastName}`).join(', ');
        // console.log(teamString);
        return teamString;
    }
    catch (error) {
        console.log(error);
    }
}

export const create = async ({title, contractor, location, startDate, dueDate, imageUrl, description, lead, creator}) => {

    let response = await fetch(`${baseUrl}/projects/create`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead, creator})
    });
    let result = await response.json();
    return result;
};

export const edit = async (projectId, title, contractor, location, startDate, dueDate, imageUrl, description, lead ) => {

    let response = await fetch(`${baseUrl}/projects/edit/${projectId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead})
    });
    let result = await response.json();
    return result;
};

export const deleteProject = async (projectId) => {
    return fetch(`${baseUrl}/projects/delete/${projectId}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export const joinProject = async (projectId, userId) => {
    return fetch(`${baseUrl}/projects/join/${projectId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({projectId, userId})
    }).then(res => res.json());
}

export const leaveProject = async (projectId, userId) => {
    return fetch(`${baseUrl}/projects/leave/${projectId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({projectId, userId})
    }).then(res => res.json());
}

