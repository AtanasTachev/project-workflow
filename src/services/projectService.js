const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const create = async ({
    projectData
}) => {
    let response = await fetch(`${baseUrl}/projects`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(projectData)
    });
    let result = await response.json();
    console.log(result);
    return result;
}

