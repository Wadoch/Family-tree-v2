import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    verifyJWT,
} from '../../Redux/authentication/actions';
import {
    getSingleFamily,
} from '../../Redux/family/actions';

import styles from './styles/styles.scss';

const mapStateToProps = ({ family }) => ({
    familyId: family.currentFamilyId,
    people: family.currentFamily.people,
    familyName: family.currentFamily.name,
});

const mapDispatchToProps = dispatch => ({
    initPage: (familyId) => {
        dispatch(verifyJWT());
        dispatch(getSingleFamily(familyId))
    },
});

class CreateFamilyScreen extends Component {
    componentDidMount() {
        const { initPage, familyId } = this.props;
        if(familyId === '') {
            this.props.history.push('/');
        }
        initPage(familyId);
    }

    render() {
        const { people, familyName } = this.props;

        return (
            <div className={ styles.container }>
                {familyName}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFamilyScreen);