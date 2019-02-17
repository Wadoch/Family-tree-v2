import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles/styles.scss';
import { enter } from '../../Styles/SVG';

import FamilyList from '../../Components/FamilyList';

import {
    verifyJWT,
    logoutUser,
} from '../../Redux/authentication/actions';
import {
    getAllFamilies,
    addNewFamily,
    removeFamily,
    setCurrentFamily,
} from '../../Redux/family/actions';

const mapStateToProps = ({ family }) => ({
    families: family.families,
});
const mapDispatchToProps = dispatch => ({
    initPage: () => {
        dispatch(verifyJWT());
        dispatch(getAllFamilies());
    },
    addNewFamily: (name, fId) => dispatch(addNewFamily(name, fId)),
    removeFamily: (familyId) => dispatch(removeFamily(familyId)),
    setCurrentFamily: (familyId, history) => dispatch(setCurrentFamily(familyId, history)),
    logout: () => dispatch(logoutUser()),
});

class MainScreen extends Component {
    mapFamilies = (families) => {
        return families.map(({familyId, name, people}) => ({
            id: familyId,
            name: name,
            peopleNum: people.length,
            handleClick: (familyId) => {
                this.props.setCurrentFamily(familyId);
                this.props.history.push('/create');
            },
            handleEdit: (familyId) => {},
            handleRemove: (familyId) => {this.props.removeFamily(familyId)},
        }));
    };

    async componentDidMount() {
        const { initPage } = this.props;
        initPage();
    }

    render() {
        const { families, addNewFamily, logout } = this.props;
        const familiesList = this.mapFamilies(families);
        return(
            <div className={ styles.container }>
                <FamilyList
                    list={ familiesList }
                    handleAdd={ (name) => {
                        addNewFamily(name)
                    } }
                />
                <a className={ styles.logoutButton } onClick={ () => logout() }>
                    LOGOUT
                    <img src={ enter } alt='enter' />
                </a>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);