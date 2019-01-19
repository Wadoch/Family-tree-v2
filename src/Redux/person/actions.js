import {
    ADD_NEW_PERSON_REQUEST,
    ADD_NEW_PERSON_SUCCESS,
    ADD_NEW_PERSON_FAILURE,
    OPEN_ADD_NEW_PERSON,
} from './types';
import {getJWT, getResponseFromEndpoint} from "../utils";

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

export const openNewPerson = () => ({
    type: OPEN_ADD_NEW_PERSON,
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