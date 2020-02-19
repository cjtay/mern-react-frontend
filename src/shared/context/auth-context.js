import React, { useState, useCallback, createContext } from 'react';

export const AuthContext = createContext({
    isLoggedin: false,
    login: () => {},
    logout: () => {}
});

export function AuthProvider(props) {
    const [isLoggedin, setIsloggedin] = useState(false);

    const login = useCallback(() => {
        setIsloggedin(true);
    }, []);

    const logout = useCallback(() => {
        setIsloggedin(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedin, login, logout }}>
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
