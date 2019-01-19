import {
    ADD_NEW_PERSON_REQUEST,
    ADD_NEW_PERSON_SUCCESS,
    ADD_NEW_PERSON_FAILURE,
    OPEN_ADD_NEW_PERSON, REMOVE_PERSON_REQUEST, REMOVE_PERSON_SUCCESS, REMOVE_PERSON_FAILURE,
} from './types';
import {getJWT, getResponseFromEndpoint} from "../utils";

export const openNewPerson = () => ({
    type: OPEN_ADD_NEW_PERSON,
});

const requestAddNewPerson = () => ({
    type: ADD_NEW_PERSON_REQUEST,
});

const successAddNewPerson = (familyId) => ({
    type: ADD_NEW_PERSON_SUCCESS,
    payload: {
        familyId: familyId,
    },
});

const failureAddNewPerson = (err) => ({
    type: ADD_NEW_PERSON_FAILURE,
    payload: err,
});

const requestRemovePerson = () => ({
    type: REMOVE_PERSON_REQUEST,
});

const successRemovePerson = (familyId) => ({
    type: REMOVE_PERSON_SUCCESS,
    payload: {
        familyId: familyId,
    },
});

const failureRemovePerson = (err) => ({
    type: REMOVE_PERSON_FAILURE,
    payload: err,
});

export const addNewPerson = (familyId, details, relationships) => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
        body: JSON.stringify({familyId, personDetails: details, relationship: relationships}),
    };

    return async dispatch => {
        dispatch(requestAddNewPerson());

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/person/add`, config);
            if(response.statusCode === 200) {
                dispatch(successAddNewPerson(response.data.familyId));
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureAddNewPerson(err));
        }
    };
};

export const removePerson = (personId) => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
        body: JSON.stringify({personId}),
    };

    return async dispatch => {
        dispatch(requestRemovePerson());

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/person/remove`, config);
            if(response.statusCode === 200) {
                dispatch(successRemovePerson(response.data.familyId));
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureRemovePerson(err));
        }
    };
};