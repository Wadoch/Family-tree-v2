import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from './types';
import {
    getJWT,
} from "../utils";

const initialState = {
    authenticated: !!getJWT(),
    pending: false,
    error: false,
    userToken: getJWT() || null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                authenticated: false,
                pending: true,
            };
        case LOGIN_SUCCESS:
            console.log('1');
            return {
                ...state,
                authenticated: true,
                pending: false,
                userToken: action.payload.userToken,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                authenticated: false,
                pending: false,
                error: true,
            };
        case LOGOUT_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                authenticated: false,
                pending: false,
            };
        case LOGOUT_FAILURE:
            return {
                ...state,
                pending: false,
                error: true,
            };
        default:
            return state;
    }
};