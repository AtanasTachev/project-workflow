const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const create = async (projectData) => {
    let response = await fetch(`${baseUrl}/projects/create`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...projectData})
    });
    console.log(response);
    let result = await response.json();
    console.log(projectData);
    console.log(result);
    return result;
};

