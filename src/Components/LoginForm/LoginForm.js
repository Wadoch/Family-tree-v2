import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles/style.scss';
import LoginScreen from "../../Screens/LoginScreen/LoginScreen";

const LoginForm = ({ onLogin }) => (
    <div className={ styles.container }>
        <div className={ styles.box }>
            <label>Username:</label>
            <input id="usernameCredentials" name="usernameCredentials" type="text" />
        </div>
        <div className={ styles.box }>
            <label>Password:</label>
            <input id="passwordCredentials" name="passwordCredentials" type="password" />
        </div>
        <div className={ styles.box }>
            <button onClick={ onLogin }>Login</button>
        </div>
    </div>
);

LoginForm.propTypes = {
    onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
    onLogin: () => {},
};

export default LoginForm;