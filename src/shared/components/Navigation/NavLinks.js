import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/auth-context';

import './NavLinks.css';

const NavLinks = props => {
    const auth = useContext(AuthContext);
    const { isLoggedin, logout } = useContext(AuthContext);
    return (
        <ul className='nav-links'>
            <li>
                <NavLink exact to='/'>
                    All USERS
                </NavLink>
            </li>
            {isLoggedin && (
                <>
                    <li>
                        <NavLink exact to={`/${auth.userId}/places`}>
                            MY PLACES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to='/places/new'>
                            ADD PLACE
                        </NavLink>
                    </li>
                    <li>
                        <button onClick={logout}>LOGOUT</button>
                    </li>
                </>
            )}
            {!isLoggedin && (
                <li>
                    <NavLink exact to='/auth'>
                        AUTHENTICATE
                    </NavLink>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
