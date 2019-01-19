import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { verifyJWT } from '../../Redux/authentication/actions';
import { getSingleFamily } from '../../Redux/family/actions';
import { addNewPerson, openNewPerson } from '../../Redux/person/actions';

import FamilyTree from '../../Components/FamilyTree';

import styles from './styles/styles.scss';

const mapStateToProps = ({ family, person }) => ({
    familyId: family.currentFamilyId,
    people: family.currentFamily.people,
    familyName: family.currentFamily.name,
    addPersonOpen: person.addPersonOpen,
});

const mapDispatchToProps = dispatch => ({
    initPage: (familyId) => {
        dispatch(verifyJWT());
        dispatch(getSingleFamily(familyId))
    },
    addNewPerson: (familyId, details, relationships) => { dispatch(addNewPerson(familyId, details, relationships)) },
    openAddNewPerson: () => { dispatch(openNewPerson()) }
});

const mapPeople = (people = []) => people.map(person => ({
    details: person.details,
    relationships: person.relationship,
    personId: person.personId,
}));

const getValue = id => document.getElementById(id).value;

const getNewPersonDetails = () => ({
    name: getValue('addPersonName'),
    surname: getValue('addPersonSurname'),
    relationshipType: getValue('addPersonRelationshipType'),
    relationshipValue: getValue('addPersonRelationshipValue'),
    birth: getValue('addPersonBirth'),
    death: getValue('addPersonDeath'),
    gender: getValue('addPersonGender'),
    additionalInfo: getValue('addPersonAdditionalInfo'),
});

const mapNewPersonDetails = (details = {}) => ({
    firstName: details.name,
    surname: details.surname,
    birthDate: details.birth,
    deathDate: details.death,
    gender: details.gender,
    additionalInfo: details.additionalInfo,
});

const mapNewPersonRelationship = (details = {}) => ({
    [details.relationshipType]: details.relationshipValue,
});

class CreateFamilyScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { initPage, familyId } = this.props;
        if(familyId === '') {
            this.props.history.push('/');
        }
        initPage(familyId);
    }

    render() {
        const { people, familyName, familyId, addNewPerson, openAddNewPerson } = this.props;

        return (
            <div className={ styles.container }>
                <h3 className={ styles.familyName }>
                    {familyName}
                </h3>
                <FamilyTree
                    people={ mapPeople(people) }
                />
                <div className={ styles.addPerson } >
                    <div
                        className={ classnames({
                            [styles.addPersonForm]: true,
                            [styles.hidden]: !this.props.addPersonOpen,
                        }) }
                    >
                        <div>
                            <label>Name: </label>
                            <input type='text' id='addPersonName' />
                        </div>
                        <div>
                            <label>Surname: </label>
                            <input type='text' id='addPersonSurname' />
                        </div>
                        <div>
                            <label>Gender: </label>
                            <select id='addPersonGender'>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div>
                            <select id='addPersonRelationshipType'>
                                <option>Parent</option>
                                <option>Partner</option>
                            </select>
                            <select id='addPersonRelationshipValue'>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </div>
                        <div>
                            <label>Date of birth:</label>
                            <input type='date' id='addPersonBirth' />
                        </div>
                        <div>
                            <label>Date of death:</label>
                            <input type='date' id='addPersonDeath' />
                        </div>
                        <div>
                            <label>Additional info:</label>
                            <textarea rows={ 3 } id='addPersonAdditionalInfo' />
                        </div>
                        <button onClick={ () => {
                            addNewPerson(
                                familyId,
                                mapNewPersonDetails(getNewPersonDetails()),
                                mapNewPersonRelationship(getNewPersonDetails())
                            )
                        } }>
                            Add person
                        </button>
                    </div>
                    <div
                        className={ styles.addPersonButton }
                        onClick={ () => openAddNewPerson() }
                    >
                        {this.props.addPersonOpen ? 'X' : '+'}
                        {/*TODO: show actual people on select list */}
                        {/*TODO: handle add action */}
                        {/*TODO: Add relationship for both parents when add */}
                        {/*TODO: Draw single person block */}
                        {/*TODO: Sort family as tree */}
                        {/*TODO: Draw whole family */}
                        {/*TODO: Add offline part of website */}
                        {/*TODO: Add SVG icons */}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateFamilyScreen);