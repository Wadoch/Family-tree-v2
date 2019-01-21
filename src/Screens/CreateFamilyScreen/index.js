import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import uuid from "uuid";
import localforage from "localforage";

import { verifyJWT } from '../../Redux/authentication/actions';
import { getSingleFamily } from '../../Redux/family/actions';
import {
    mockOfflineSingleFamily,
    offlineAddNewPerson,
} from '../../Redux/offline/actions';
import { addNewPerson, removePerson, openNewPerson } from '../../Redux/person/actions';

import FamilyTree from '../../Components/FamilyTree';

import styles from './styles/styles.scss';

const mapStateToProps = ({ family, person }) => ({
    familyId: family.currentFamilyId,
    people: family.currentFamily.people,
    familyName: family.currentFamily.name,
    addPersonOpen: person.addPersonOpen,
    offlineIds: family.offlineIds,
});

const mapOnlineDispatchToProps = dispatch => ({
    initPage: (familyId) => {
        dispatch(verifyJWT());
        dispatch(getSingleFamily(familyId));
    },
    addNewPerson: (familyId, details, relationships) => { dispatch(addNewPerson(familyId, details, relationships)) },
    removePerson: (personId) => { dispatch(removePerson(personId)) },
    openAddNewPerson: () => { dispatch(openNewPerson()) },
});

const mapOfflineDispatchToProps = dispatch => ({
    initPage: () => {
        dispatch(mockOfflineSingleFamily())
    },
    addNewPerson: async (familyId, details, relationships, people) => {
        const personId = uuid();
        const val = await localforage.setItem(personId, {personId, details, relationship: relationships});
        const partnerId = relationships && relationships.partner ? relationships.partner : null;
        let parentsId = relationships && relationships.parents ? relationships.parents : [];

        if(parentsId.length > 0) {
            parentsId.push((await localforage.getItem(parentsId[0])).relationship.partner);
        }

        let ppl = people;

        let rel = null;
        if(partnerId) {
            rel = await localforage.getItem(partnerId);

            rel.relationship.partner = personId;

            ppl.forEach(e => {
                if(e.personId === partnerId) {
                    e.relationship.partner = personId;
                }
            });
            await localforage.setItem(partnerId, rel);
        }

        let parents = [];
        if(parentsId.length > 0) {
            let p1 = await localforage.getItem(parentsId[0]);
            let p2 = await localforage.getItem(parentsId[1]);

            if(p1.relationship.children) {
                p1.relationship.children.push(personId);
            }
            else {
                p1.relationship.children = [personId];
            }

            if(p2.relationship.children) {
                p2.relationship.children.push(personId);
            }
            else {
                p2.relationship.children = [personId];
            }

            ppl.forEach(e => {
                if(e.personId === parentsId[0] || e.personId === parentsId[1]) {
                    if(e.relationship.children) {
                        e.relationship.children.push(personId);
                    }
                    else {
                        e.relationship.children = [personId];
                    }
                }
            });
            parents.push(p1, p2);
            await localforage.setItem(parentsId[0], p1);
            await localforage.setItem(parentsId[1], p2);
        }

        ppl = [...ppl, val];

        let pplIds = await localforage.getItem('offlineIds');
        if(!pplIds) {
            pplIds = [];
        }
        pplIds.push(personId);
        await localforage.setItem('offlineIds', pplIds);
        dispatch(offlineAddNewPerson(familyId, details, relationships, ppl));
    },
    removePerson: (personId) => {},
    openAddNewPerson: () => { dispatch(openNewPerson()) },
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

const mapNewPersonRelationship = (details = {}) => {
    if(details.relationshipType === 'parents') {
        return details.relationshipValue !== '' ?
            ({
                [details.relationshipType]: [details.relationshipValue],
            }) : {partner: null, parents: []};
    }
    return ({
        [details.relationshipType]: details.relationshipValue !== '' ? details.relationshipValue : null,
    });
};

const getPeopleNames = (people = []) => people.map(e => ({
    value: e.personId,
    name: `${e.details.firstName} ${e.details.surname}`,
}));

const mapPeopleToSelectOptions = (people) => people.map(e => (<option value={ e.value }>{e.name}</option>));

class CreateFamilyScreen extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { initPage, familyId, offline } = this.props;
        if(!offline && familyId === '') {
            this.props.history.push('/');
        }

        initPage(familyId);
    }

    render() {
        const {
            people,
            familyName,
            familyId,
            addNewPerson,
            removePerson,
            addPersonOpen,
            openAddNewPerson,
            offline,
        } = this.props;

        return (
            <div className={ styles.container }>

                <h3 className={ styles.familyName }>
                    {!offline ? (
                        <a className={ styles.backButton } onClick={ () => {this.props.history.push('/')} }>
                            BACK
                        </a>) : null
                    }
                    {familyName}
                </h3>
                <FamilyTree
                    people={ mapPeople(people) }
                    removePerson={ removePerson }
                />
                <div className={ styles.addPerson } >
                    <div
                        className={ classnames({
                            [styles.addPersonForm]: true,
                            [styles.hidden]: !addPersonOpen,
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
                                <option value='parents'>Parent</option>
                                <option value='partner'>Partner</option>
                            </select>
                            <select id='addPersonRelationshipValue'>
                                {mapPeopleToSelectOptions(getPeopleNames(people))}
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
                        <button onClick={ async () => {
                            await addNewPerson(
                                familyId,
                                mapNewPersonDetails(getNewPersonDetails()),
                                mapNewPersonRelationship(getNewPersonDetails()),
                                people
                            )
                        } }>
                            Add person
                        </button>
                    </div>
                    <div
                        className={ styles.addPersonButton }
                        onClick={ () => openAddNewPerson() }
                    >
                        {addPersonOpen ? 'X' : '+'}
                        {/*TODO: Add SVG icons */}
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapOnlineDispatchToProps
)(CreateFamilyScreen);

export const OfflineCreateFamilyScreen = connect(
    mapStateToProps,
    mapOfflineDispatchToProps
)(CreateFamilyScreen);