import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './styles/styles.scss';

import FamilyList from '../../Components/FamilyList';
import {
    verifyJWT,
} from '../../Redux/authentication/actions';
import {
    getAllFamilies,
    addNewFamily,
    removeFamily,
    setCurrentFamily,
} from "../../Redux/family/actions";

// TODO: ask user with notification to add family if found in offline db
const mapStateToProps = ({ family }) => ({
    families: family.families,
});
const mapDispatchToProps = dispatch => ({
    initPage: () => {
        dispatch(verifyJWT());
        dispatch(getAllFamilies());
    },
    addNewFamily: (name) => dispatch(addNewFamily(name)),
    removeFamily: (familyId) => dispatch(removeFamily(familyId)),
    setCurrentFamily: (familyId, history) => dispatch(setCurrentFamily(familyId, history)),
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

    componentDidMount() {
        const { initPage } = this.props;
        initPage();
    }

    render() {
        const { families, addNewFamily } = this.props;
        const familiesList = this.mapFamilies(families);
        return(
            <div className={ styles.container }>
                <FamilyList
                    list={ familiesList }
                    handleAdd={ (name) => {
                        addNewFamily(name)
                    } }
                />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainScreen);