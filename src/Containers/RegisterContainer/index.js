import React, { Component } from 'react';
import { connect } from 'react-redux';

import Form from '../../Components/Form';
import styles from '../../Components/Form/styles/style.scss';

const mapDispatchToProps = dispatch => ({
    onRegister: data => {},
});

class RegisterContainer extends Component {
    render() {
        const { onRegister } = this.props;

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
                onClick: onRegister({
                    username: document.getElementById('usernameRegisterCredentials'),
                    password: document.getElementById('passwordRegisterCredentials'),
                    email: document.getElementById('emailRegisterCredentials'),
                }),
            },
        };

        return (
            <div className={ styles.registerFormContainer } >
                <Form content={ registerFormContent } />
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RegisterContainer);