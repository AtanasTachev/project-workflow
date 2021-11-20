export const login = (username)  => {
    localStorage.setItem('username', username);
};

export const logout = (username)  => {
    localStorage.removeItem('username', username);
};

export const getUser = (username)  => {
    localStorage.getItem('username', username);

    return username;
};

export const isAuthenticated = ()  => {
    return Boolean(getUser());
};
