import {baseUrl} from '../constants';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const create = async (title, contractor, location, startDate, dueDate, imageUrl, description, lead) => {
    console.log(title, contractor, location, startDate, dueDate, imageUrl, description, lead);
    let response = await fetch(`${baseUrl}/projects/create`, {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({title, contractor, location, startDate, dueDate, imageUrl, description, lead})
    });
    console.log(response);
    let result = await response.json();
    // console.log(title, contractor, location, startDate, dueDate, imageUrl, description, lead);
    console.log(result);
    return result;
};

