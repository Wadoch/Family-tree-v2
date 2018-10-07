import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';
import {
    getJWT,
} from "../utils";

const initialState = {
    authenticated: !!getJWT(),
    pending: false,
    errorMessage: null,
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
                errorMessage: action.error,
            };
        default:
            return state;
    }
};