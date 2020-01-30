import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Users from './users/components/Users';
import NewPlace from './places/components/NewPlace';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Users />
                </Route>
                <Route exact path="/places/new">
                    <NewPlace />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
