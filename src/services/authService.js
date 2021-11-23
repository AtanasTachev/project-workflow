export const login = (username)  => {
    localStorage.setItem('username', username);
};

export const register = (userData)  => {
    localStorage.setItem('userData', userData);
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
