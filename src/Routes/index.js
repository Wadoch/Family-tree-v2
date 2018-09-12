import React from 'react';
import { Route } from 'react-router';

import LoginScreen from '../Screens/LoginScreen';

export default () => (
    <div>
        <Route
            exact
            path='/login'
            component={ LoginScreen }
        />
    </div>
);