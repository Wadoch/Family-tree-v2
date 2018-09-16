import React, { Component } from 'react';

import { LoginForm } from '../../Components/Form';

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
            </div>
        );
    }
}

export default LoginScreen;