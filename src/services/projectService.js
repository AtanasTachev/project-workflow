const baseUrl = 'https://workflow-project-server.herokuapp.com'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/projects`)

    let projects = await response.json();

    return projects;

};

