import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import RegisterContainer from '../../Containers/RegisterContainer';

import styles from './styles/style.scss';
import {verifyJWT} from "../../Redux/authentication/actions";

const mapDispatchToProps = dispatch => ({
    initPage: () => dispatch(verifyJWT()),
});

class RegisterScreen extends Component {
    componentDidMount() {
        const { initPage } = this.props;
        initPage();
    }
    render() {
        return (
            <div className={ styles.container }>
                <div className={ styles.box }>
                    <h2 className={ styles.title }>Register</h2>
                    <RegisterContainer />
                    <div>
                        <Link to='/login'>Back to login</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(RegisterScreen);