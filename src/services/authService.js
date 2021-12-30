import {baseUrl} from '../constants';

export const login = async (email, password)  => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({email, password})
    });
    let jsonResult = await response.json();
    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = async (specialty, title, firstName, lastName, email, password, repeatPassword)  => {
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({specialty, title, firstName, lastName, email, password, repeatPassword})
    });
    let result = await response.json();
    return result;
};

export const logout = ()  => {
    return fetch(`${baseUrl}/users/logout`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        }
    });
};

export const getUser = async (userId)  => {

    try{
        let response = await fetch(`${baseUrl}/users/${userId}`);
        let user = await response.json();
        return user;
    } catch (error) {
       console.log(error.message);
    }
};

export const getJoinedProjects = async (userId)  => {

    try{
        let response = await fetch(`${baseUrl}/users/${userId}`);
        let user = await response.json();
        const joinedProjectsString = user.projectsJoined.map(x => x.title).join(', ');
        console.log(joinedProjectsString);
        return joinedProjectsString;
    } catch (error) {
       console.log(error.message);
    }
};

export const getMyProjects = async (userId)  => {

    try{
        let response = await fetch(`${baseUrl}/users/${userId}`);
        let user = await response.json();
        const myProjectsString = user.myProjects.map(x => x.title).join(', ');
        return myProjectsString;
    } catch (error) {
       console.log(error.message);
    }
};

export const getAllUsers = async ()  => {
    let response = await fetch(`${baseUrl}/users`);
    let users = await response.json();
    return users;
};

export const deleteUser = async (usertId) => {
    return fetch(`${baseUrl}/users/delete/${usertId}`, {
        method: 'DELETE'
    }).then(res => res.json());
}

export const isAuthenticated = ()  => {
    return Boolean(getUser());
};
