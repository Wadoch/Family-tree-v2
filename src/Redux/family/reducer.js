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
    SET_CURRENT_FAMILY,
    GET_SINGLE_FAMILY_REQUEST,
    GET_SINGLE_FAMILY_SUCCESS,
    GET_SINGLE_FAMILY_FAILURE,
} from './types';

const initialState = {
    families: [],
    currentFamily: {},
    currentFamilyId: '',
    pending: false,
    error: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_FAMILY:
            return {
                ...state,
                currentFamilyId: action.payload.familyId,
            };
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
        case GET_SINGLE_FAMILY_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case GET_SINGLE_FAMILY_SUCCESS:
            return {
                ...state,
                pending: false,
                currentFamily: action.payload.family,
            };
        case GET_SINGLE_FAMILY_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        default:
            return state;
    }
}