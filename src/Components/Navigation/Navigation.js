import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { logoutUser } from "../../Redux/authentication/actions";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser()),
});

const Navigation = ({ logoutUser }) => (
    <div>
        navbar
        <button onClick={ logoutUser }>
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

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);