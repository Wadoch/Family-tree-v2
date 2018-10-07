import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LoginForm from '../../Containers/LoginContainer';

import styles from './styles/style.scss';

class LoginScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.box }>
                    <h2 className={ styles.title }>Family tree</h2>
                    <div className={ styles.loginBox }>
                        <LoginForm />
                        <div className={ styles.registerLink }>
                            <Link to='/register'> or create new account</Link>
                        </div>
                    </div>
                </div>
                <div className={ styles.box }>
                    TEST
                </div>
            </div>
        );
    }
}

export default LoginScreen;