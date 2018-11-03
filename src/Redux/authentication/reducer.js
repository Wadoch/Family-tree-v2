import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_JWT_REQUEST,
    VERIFY_JWT_SUCCESS,
    VERIFY_JWT_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
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
            };
        case REGISTER_REQUEST:
            return {
                ...state,
                authenticated: false,
                pending: true,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                authenticated: true,
                pending: false,
                userToken: action.payload.userToken,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                authenticated: false,
                pending: false,
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
            };
        case VERIFY_JWT_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case VERIFY_JWT_SUCCESS:
            return {
                ...state,
                authenticated: true,
                pending: false,
                userToken: action.userToken,
            };
        case VERIFY_JWT_FAILURE:
            return {
                ...state,
                authenticated: false,
                pending: false,
            };
        default:
            return state;
    }
};