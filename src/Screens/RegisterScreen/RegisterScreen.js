import React, { Component } from 'react';

import RegisterContainer from '../../Containers/RegisterContainer';

import styles from './styles/style.scss';

class RegisterScreen extends Component {
    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.box }>
                    <h2 className={ styles.title }>Register</h2>
                    <RegisterContainer />
                </div>
            </div>
        );
    }
}

export default RegisterScreen;