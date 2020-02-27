import { useState, useCallback, useEffect, useContext } from 'react';
import { AuthContext } from './shared/context/auth-context';

let logoutTimer;
export const useAuth = () => {
    const { token, login, logout, tokenTimeOut } = useContext(AuthContext);

    useEffect(() => {
        console.log('useEffect at Appjs');
        const storedData = JSON.parse(localStorage.getItem('userData'));
        if (
            storedData &&
            storedData.token &&
            new Date(storedData.expiration) > new Date()
        ) {
            login(
                storedData.userId,
                storedData.token,
                new Date(storedData.expiration)
            );
        }
    }, [login]);

    useEffect(() => {
        if (token && tokenTimeOut) {
            const remainingTime = tokenTimeOut.getTime() - new Date().getTime();
            logoutTimer = setTimeout(logout, remainingTime);
        } else {
            clearTimeout(logoutTimer);
        }
    }, [token, logout, tokenTimeOut]);
};
