import React from 'react';
import PropTypes from 'prop-types';

import Form from './components/Form';

const LoginForm = ({ onLogin }) => {
    const content = {
        data: [
            {
                text: 'Username:',
                type: 'text',
                name: 'usernameLoginCredentials',
            },
            {
                text: 'Password:',
                type: 'password',
                name: 'passwordLoginCredentials',
            },
            {
                text: 'Remember me',
                type: 'checkbox',
                name: 'rememberMeLoginCredentials',
            },
        ],
        button: {
            text: 'Login',
            onClick: onLogin,
        },
    };

    return (
        <Form content={ content } />
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func,
};

LoginForm.defaultProps = {
    onLogin: () => {},
};

export default LoginForm;