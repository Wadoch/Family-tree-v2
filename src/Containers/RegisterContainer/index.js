import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Form } from '../../Components/Form';

//  TODO: redux will send data to api, the only functionality

const mapStateToProps = state => ({});
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
                onClick: onRegister({
                    username: document.getElementById('usernameRegisterCredentials'),
                    password: document.getElementById('passwordRegisterCredentials'),
                    email: document.getElementById('emailRegisterCredentials'),
                }),
            },
        };

        return (
            <div>
                <Form content={ registerFormContent } />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegisterContainer);