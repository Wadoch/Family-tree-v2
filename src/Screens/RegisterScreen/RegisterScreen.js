import React, { Component } from 'react';

import RegisterContainer from '../../Containers/RegisterContainer';

import styles from './styles/style.scss';

class RegisterScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <div>
                    <h2>Register</h2>
                    <RegisterContainer />
                </div>
            </div>
        );
    }
}

export default RegisterScreen;