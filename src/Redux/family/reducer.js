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

const initialState = {
    families: [],
    currentFamily: {},
    pending: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_FAMILIES_REQUEST:
            return {
                ...state,
                pending: true,
                error: false,
            };
        case GET_ALL_FAMILIES_SUCCESS:
            return {
                ...state,
                pending: false,
                families: action.payload.families,
            };
        case GET_ALL_FAMILIES_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        case ADD_NEW_FAMILY_REQUEST:
            return {
                ...state,
                pending: true,
                error: false,
            };
        case ADD_NEW_FAMILY_SUCCESS:
            return {
                ...state,
                pending: false,
            };
        case ADD_NEW_FAMILY_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        case REMOVE_FAMILY_REQUEST:
            return {
                ...state,
                pending: true,
                error: false,
            };
        case REMOVE_FAMILY_SUCCESS:
            return {
                ...state,
                pending: false,
            };
        case REMOVE_FAMILY_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        default:
            return state;
    }
}