import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

import styles from './styles/style.scss';

const LoginForm = ({ onLogin }) => {
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
            {
                text: 'Remember me',
                type: 'checkbox',
                name: 'rememberMeLoginCredentials',
                className: styles.loginRememberCheckBox,
            },
        ],
        button: {
            text: 'Login',
            onClick: onLogin,
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

export default LoginForm;