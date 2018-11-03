import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import LoginForm from '../../Containers/LoginContainer';

import styles from './styles/style.scss';
import { verifyJWT } from "../../Redux/authentication/actions";

const mapDispatchToProps = dispatch => ({
    initPage: () => dispatch(verifyJWT()),
});

class LoginScreen extends Component {
    componentDidMount() {
        const { initPage } = this.props;
        initPage();
    }

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

export default connect(
    null,
    mapDispatchToProps
)(LoginScreen);