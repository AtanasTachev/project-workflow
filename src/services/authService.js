const baseUrl = 'http://localhost:3030';

export const login = async (email, password)  => {
    let response = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(email, password)
    });
    let jsonResult = await response.json();
    if (response.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = async ({...userData})  => {
    localStorage.setItem('userData', userData);
    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({...userData})
    });
    let result = await response.json();
    console.log(result);
    return result;
};

export const logout = (token)  => {
    return fetch(`${baseUrl}/users/logout`);
};

export const getUser = ()  => {
    let user = localStorage.getItem('user');

    return user;
};

export const isAuthenticated = ()  => {
    return Boolean(getUser());
};
