import React, { Component } from 'react';

import { RegisterForm } from '../../Components/Form';

import styles from './styles/style.scss';

class RegisterScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
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

export default RegisterScreen;