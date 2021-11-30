const baseUrl = 'http://localhost:3030';

export const login = async (userData)  => {
    localStorage.setItem('userData', userData);
    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    let result = await response.json();
    console.log(result);
    return result;
};

export const register = async (userData)  => {
    localStorage.setItem('userData', userData);
    let response = await fetch(`${baseUrl}/users`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    let result = await response.json();
    console.log(result);
    return result;
};

export const logout = (username, userData)  => {
    localStorage.removeItem('username', username);
    localStorage.removeItem('userData', userData);
};

export const getUser = (username)  => {
    localStorage.getItem('username', username);

    return username;
};

export const isAuthenticated = ()  => {
    return Boolean(getUser());
};
