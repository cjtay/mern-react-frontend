import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';

function App() {
    const { token } = useContext(AuthContext);
    let routes;

    if (token) {
        routes = (
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/:userId/places">
                    <UserPlaces />
                </Route>
                <Route exact path="/places/new">
                    <NewPlace />
                </Route>
                <Route exact path="/places/:placeId">
                    <UpdatePlace />
                </Route>

                <Redirect to="/" />
            </Switch>
        );
    } else {
        routes = (
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/:userId/places">
                    <UserPlaces />
                </Route>
                <Route exact path="/auth">
                    <Auth />
                </Route>
                <Redirect to="/auth" />
            </Switch>
        );
    }

    return (
        <Router>
            <MainNavigation />
            <main>{routes}</main>
        </Router>
    );
}

export default App;

// Max version......
// import React, { useState, useCallback } from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//     Switch
// } from 'react-router-dom';

// import Users from './users/pages/Users';
// import NewPlace from './places/pages/NewPlace';
// import UserPlaces from './places/pages/UserPlaces';
// import MainNavigation from './shared/components/Navigation/MainNavigation';
// import UpdatePlace from './places/pages/UpdatePlace';
// import Auth from './users/pages/Auth';
// import { AuthContext } from './shared/context/auth-context';

// function App() {
//     const [isLoggedin, setIsloggedin] = useState(false);

//     const login = useCallback(() => {
//         setIsloggedin(true);
//     }, []);

//     const logout = useCallback(() => {
//         setIsloggedin(false);
//     }, []);

//     let routes;

//     if (isLoggedin) {
//         routes = (
//             <Switch>
//                 <Route exact path="/">
//                     <Users />
//                 </Route>
//                 <Route exact path="/:userId/places">
//                     <UserPlaces />
//                 </Route>
//                 <Route exact path="/places/new">
//                     <NewPlace />
//                 </Route>
//                 <Route exact path="/places/:placeId">
//                     <UpdatePlace />
//                 </Route>

//                 <Redirect to="/" />
//             </Switch>
//         );
//     } else {
//         routes = (
//             <Switch>
//                 <Route exact path="/">
//                     <Users />
//                 </Route>
//                 <Route exact path="/:userId/places">
//                     <UserPlaces />
//                 </Route>
//                 <Route exact path="/auth">
//                     <Auth />
//                 </Route>
//                 <Redirect to="/auth" />
//             </Switch>
//         );
//     }

//     return (
//         <AuthContext.Provider value={{ isLoggedin, login, logout }}>
//             <Router>
//                 <MainNavigation />
//                 <main>{routes}</main>
//             </Router>
//         </AuthContext.Provider>
//     );
// }

// export default App;
