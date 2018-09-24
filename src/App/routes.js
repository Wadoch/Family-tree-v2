import React from 'react';

import PrivateRoute from '../Components/PrivateRoute';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MainScreen from "../Screens/MainScreen";

export default () => (
    <div>
        <PrivateRoute
            exact
            path='/login'
            redirectPath='/menu'
            forLoggedIn={ false }
            component={ LoginScreen }
        />
        <PrivateRoute
            exact
            path='/register'
            redirectPath='/menu'
            forLoggedIn={ false }
            component={ RegisterScreen }
        />
        <PrivateRoute
            exact
            path='/menu'
            redirectPath='/login'
            forLoggedIn={ true }
            isAuthenticated={ false }
            component={ MainScreen }
        />
    </div>
);