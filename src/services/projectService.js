import {baseUrl} from '../constants';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const getOne = async (projectId) => {
    let response = await fetch(`${baseUrl}/projects/${projectId}/details`)
    let project = await response.json();
    return project;

};

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

    let response = await fetch(`${baseUrl}/projects/${projectId}/edit`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead})
    });
    let result = await response.json();
    return result;
};

