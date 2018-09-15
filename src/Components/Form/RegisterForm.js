import React from 'react';
import PropTypes from 'prop-types';

import Form from './components/Form';

const RegisterForm = ({ onRegister }) => {
    const content = {
        data: [
            {
                text: 'Username:',
                type: 'text',
                name: 'usernameRegisterCredentials',
            },
            {
                text: 'Password:',
                type: 'password',
                name: 'passwordRegisterCredentials',
            },
            {
                text: 'Confirm password:',
                type: 'password',
                name: 'confirmPasswordRegisterCredentials',
            },
            {
                text: 'Email:',
                type: 'email',
                name: 'emailRegisterCredentials',
            },
        ],
        button: {
            text: 'Register',
            onClick: onRegister,
        },
    };

    return (
        <Form content={ content } />
    );
};

RegisterForm.propTypes = {
    onLogin: PropTypes.func,
};

RegisterForm.defaultProps = {
    onRegister: () => {},
};

export default RegisterForm;