import React, { useState, useCallback, createContext } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    login: () => {},
    logout: () => {}
});

export function AuthProvider(props) {
    const [token, setToken] = useState();
    const [userId, setUserId] = useState(false);

    const login = useCallback((uid, token) => {
        setToken(token);
        setUserId(uid);
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
    }, []);

    return (
        <AuthContext.Provider
            value={{ isLoggedIn: !!token, token, userId, login, logout }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

// Max version

// import { createContext } from 'react';

// export const AuthContext = createContext({
//     isLoggedin: false,
//     login: () => {},
//     logout: () => {}
// });
