import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import NavigationLinks from './NavigationLinks';

import { logoutUser } from "../../Redux/authentication/actions";

import styles from './styles/style.scss';

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
});

const links = [{
    link: '/yourFamilies',
    text: 'Your families',
},{
    link: '/addFamily',
    text: 'Add new family',
}];

const Navigation = ({ logoutUser }) => (
    <div className={ styles.container } >
        <h3 className={ styles.title }>Family tree</h3>
        <NavigationLinks links={ links } />
        <button className={ styles.logoutButton } onClick={ logoutUser }>
            LOGOUT
        </button>
    </div>
);

Navigation.propTypes = {
    logoutUser: PropTypes.func,
};

Navigation.defaultProps = {
    logoutUser: () => {},
};

export default connect(null, mapDispatchToProps)(Navigation);