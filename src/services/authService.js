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
    console.log(specialty, title, firstName, lastName, email, password, repeatPassword);
    let response = await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({specialty, title, firstName, lastName, email, password, repeatPassword})
    });
    let result = await response.json();
    console.log(result);
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

export const getUser = ()  => {
    // let user = localStorage.getItem('user');

    // return user;
};

export const isAuthenticated = ()  => {
    return Boolean(getUser());
};
