import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Form from '../../Components/Form';

import {
    loginUser,
} from '../../Redux/authentication/actions';

import styles from '../../Components/Form/styles/style.scss';

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    onLogin: (creds) => dispatch(loginUser(creds)),
});

const LoginForm = ({ onLogin }) => {
    const loginUserWithCredentials = () => {
        const username = document.getElementById('usernameLoginCredentials').value;
        const password = document.getElementById('passwordLoginCredentials').value;

        onLogin({username, password});
    };

    const content = {
        data: [
            {
                text: 'Username:',
                type: 'text',
                name: 'usernameLoginCredentials',
                className: styles.loginUsername,
            },
            {
                text: 'Password:',
                type: 'password',
                name: 'passwordLoginCredentials',
                className: styles.loginPassword,
            },
        ],
        button: {
            text: 'Login',
            onClick: loginUserWithCredentials,
            className: styles.loginButton,
        },
    };

    return (
        <div className={ styles.loginFormContainer }>
            <Form content={ content } />
        </div>
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
    onLogin: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);