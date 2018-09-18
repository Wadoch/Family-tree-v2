import React from 'react';
import { Route } from 'react-router';

import PrivateRoute from '../Components/PrivateRoute';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import MainScreen from "../Screens/MainScreen";

export default () => (
    <div>
        <Route
            exact
            path='/login'
            component={ LoginScreen }
        />
        <Route
            exact
            path='/register'
            component={ RegisterScreen }
        />
        <PrivateRoute
            exact
            path='/menu'
            isAuthenticated={ false }
            component={ MainScreen }
        />
    </div>
);