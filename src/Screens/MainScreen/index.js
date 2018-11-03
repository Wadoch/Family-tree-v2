import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles/styles.scss';
import Navigation from "../../Components/Navigation";

import {
    verifyJWT,
} from '../../Redux/authentication/actions';

// TODO: add demo in readme
// TODO: list of families etc.

const mapDispatchToProps = dispatch => ({
    initPage: () => dispatch(verifyJWT()),
});

class MainScreen extends Component {
    componentDidMount() {
        const { initPage } = this.props;
        initPage();
    }

    render() {
        return(
            <div className={ styles.container }>
                <Navigation />
                Main
            </div>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(MainScreen);