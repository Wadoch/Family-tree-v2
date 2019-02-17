import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import PrivateRoute from '../Components/PrivateRoute';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';
import ListScreen from "../Screens/ListScreen";
import CreateFamilyScreen from "../Screens/CreateFamilyScreen";

const mapStateToProps = state => {
    const { authentication } = state;
    const { authenticated } = authentication;

    return {
        authenticated,
    };
};

const Routes = ({ authenticated }) => {
    return (
        <div>
            <PrivateRoute
                exact
                path='/'
                redirectPath='/menu'
                forLoggedIn={ false }
                isAuthenticated={ authenticated }
                component={ LoginScreen }
            />
            <PrivateRoute
                exact
                path='/register'
                redirectPath='/menu'
                forLoggedIn={ false }
                isAuthenticated={ authenticated }
                component={ RegisterScreen }
            />
            <PrivateRoute
                exact
                path='/menu'
                redirectPath='/'
                forLoggedIn={ true }
                isAuthenticated={ authenticated }
                component={ ListScreen }
            />
            <PrivateRoute
                exact
                path='/create'
                redirectPath='/'
                forLoggedIn={ true }
                isAuthenticated={ authenticated }
                component={ CreateFamilyScreen }
            />
        </div>
    );
};

Routes.propTypes = {
    authenticated: PropTypes.bool,
};

Routes.defaultProps = {
    authenticated: false,
};

export default withRouter(connect(mapStateToProps)(Routes));