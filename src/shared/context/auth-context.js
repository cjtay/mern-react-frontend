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
    const [tokenTimeOut, setTokenTimeout] = useState();

    const login = useCallback((uid, token, expirationDate) => {
        setToken(token);
        setUserId(uid);
        const tokenExpirationDate =
            expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
        setTokenTimeout(tokenExpirationDate);
        localStorage.setItem(
            'userData',
            JSON.stringify({
                userId: uid,
                token: token,
                expiration: tokenExpirationDate.toISOString()
            })
        );
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setTokenTimeout(null);
        setUserId(null);
        localStorage.removeItem('userData');
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token,
                userId,
                login,
                logout,
                tokenTimeOut,
                setTokenTimeout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;

// Max version

// import { createContext, useEffect, useState } from 'react';

// export const AuthContext = createContext({
//     isLoggedin: false,
//     login: () => {},
//     logout: () => {}
// });
