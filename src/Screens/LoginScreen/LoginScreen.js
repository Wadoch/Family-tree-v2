import React, { Component } from 'react';

import { LoginForm, RegisterForm } from '../../Components/Form';

import styles from './styles/style.scss';

class LoginScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <div>
                    <h2>Login</h2>
                    <LoginForm
                        onLogin={ () => {} }
                    />
                </div>
                <div>
                    <h2>Register</h2>
                    <RegisterForm
                        onRegister={ () => {} }
                    />
                </div>
            </div>
        );
    }
}

export default LoginScreen;