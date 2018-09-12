import React, { Component } from 'react';

import LoginForm from '../../Components/LoginForm';

import styles from './styles/style.scss';

class LoginScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <h2>Login page</h2>
                <LoginForm
                    onLogin={ () => {} }
                />
            </div>
        );
    }
}

export default LoginScreen;