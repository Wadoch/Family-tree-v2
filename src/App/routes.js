import React from 'react';
import { Route } from 'react-router';

import LoginScreen from '../Screens/LoginScreen/index';
import MainScreen from "../Screens/MainScreen/index";

export default () => (
    <div>
        <Route
            exact
            path='/login'
            component={ LoginScreen }
        />
        <Route
            exact
            path='/menu'
            component={ MainScreen }
        />
    </div>
);