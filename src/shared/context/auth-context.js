import React, { useState, useCallback, createContext } from 'react';

export const AuthContext = createContext({
    isLoggedin: false,
    userId: null,
    login: () => {},
    logout: () => {}
});

export function AuthProvider(props) {
    const [isLoggedin, setIsloggedin] = useState(false);
    const [userId, setUserId] = useState(null);

    const login = useCallback(uid => {
        setIsloggedin(true);
        setUserId(uid);
    }, []);

    const logout = useCallback(() => {
        setIsloggedin(false);
        setUserId(null);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedin, userId, login, logout }}>
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
