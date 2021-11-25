const baseUrl = 'https://workflow-project-server.herokuapp.com'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

export const create = async (projectData) => {
    let response = await fetch(`${baseUrl}/projects`, {
        mode: 'no-cors',
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(projectData)
    });
    let result = await response.json();
    return result;
}

