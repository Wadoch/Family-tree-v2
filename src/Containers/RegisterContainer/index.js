import React from 'react';
import { connect } from 'react-redux';

import Form from '../../Components/Form';
import styles from '../../Components/Form/styles/style.scss';
import { registerUser } from "../../Redux/authentication/actions";

const mapDispatchToProps = dispatch => ({
    onRegister: (creds) => dispatch(registerUser(creds)),
});

const RegisterContainer = ({ onRegister }) => {
    const registerUserWithCredentials = () => {
        const username = document.getElementById('usernameRegisterCredentials').value;
        const password = document.getElementById('passwordRegisterCredentials').value;
        const email = document.getElementById('emailRegisterCredentials').value;

        onRegister({username, password, email});
    };

    const registerFormContent = {
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
            className: styles.registerButton,
            onClick: registerUserWithCredentials,
        },
    };

    return (
        <div className={ styles.registerFormContainer }>
            <Form content={ registerFormContent }/>
        </div>
    );
};

export default connect(
    null,
    mapDispatchToProps
)(RegisterContainer);