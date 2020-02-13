import React from 'react';
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

function App() {
    return (
        <Router>
            <MainNavigation />
            <main>
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
            </main>
        </Router>
    );
}

export default App;
