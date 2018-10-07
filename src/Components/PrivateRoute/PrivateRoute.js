import React from 'react';
import {Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({component: Component, isAuthenticated, forLoggedIn, redirectPath, ...rest}) => (
    <Route
        { ...rest }
        render={ props => (
            (forLoggedIn === isAuthenticated)
                ? <Component { ...props } />
                : <Redirect to={ redirectPath } />
        ) }
    />
);

export default PrivateRoute;