import {
    GET_ALL_FAMILIES_REQUEST,
    GET_ALL_FAMILIES_SUCCESS,
    GET_ALL_FAMILIES_FAILURE,
    ADD_NEW_FAMILY_REQUEST,
    ADD_NEW_FAMILY_SUCCESS,
    ADD_NEW_FAMILY_FAILURE,
    REMOVE_FAMILY_REQUEST,
    REMOVE_FAMILY_SUCCESS,
    REMOVE_FAMILY_FAILURE,
} from './types';

import {getJWT, getResponseFromEndpoint} from "../utils";

const requestGetAllFamilies = () => ({
    type: GET_ALL_FAMILIES_REQUEST,
});

const successGetAllFamilies = families => ({
    type: GET_ALL_FAMILIES_SUCCESS,
    payload: {
        families,
    },
});

const failureGetAllFamilies = () => ({
    type: GET_ALL_FAMILIES_FAILURE,
});

const requestAddNewFamily = () => ({
    type: ADD_NEW_FAMILY_REQUEST,
});

const successAddNewFamily = () => ({
    type: ADD_NEW_FAMILY_SUCCESS,
});

const failureAddNewFamily = () => ({
    type: ADD_NEW_FAMILY_FAILURE,
});

const requestremoveFamily = () => ({
    type: REMOVE_FAMILY_REQUEST,
});

const successremoveFamily = () => ({
    type: REMOVE_FAMILY_SUCCESS,
});

const failureRemoveFamily = () => ({
    type: REMOVE_FAMILY_FAILURE,
});

export const getAllFamilies = () => {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
    };

    return async dispatch => {
        dispatch(requestGetAllFamilies());

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/family/list`, config);

            if(response.statusCode === 200) {
                dispatch(successGetAllFamilies(response.data.families));
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureGetAllFamilies(err));
        }
    };
};

export const addNewFamily = (name) => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
        body: JSON.stringify({name: name}),
    };

    return async dispatch => {
        dispatch(requestAddNewFamily());

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/family/add`, config);

            if(response.statusCode === 200) {
                dispatch(successAddNewFamily());
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureAddNewFamily());
        }
    };
};

export const removeFamily = (familyId) => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
        body: JSON.stringify({familyId: familyId}),
    };

    return async dispatch => {
        dispatch(requestremoveFamily());

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/family/remove`, config);

            if(response.statusCode === 200) {
                dispatch(successremoveFamily());
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureRemoveFamily());
        }
    };
};
