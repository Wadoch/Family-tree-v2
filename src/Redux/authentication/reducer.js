import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './types';

const initialState = {
    initialized: false,
    pending: false,
    error: null,
};

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case REGISTER_REQUEST:
            return {
                ...state,
                pending: true,
                error: null,
            };
        case REGISTER_SUCCESS:
            return {
                ...state,
                ...payload.data,
                pending: false,
                initialized: true,
            };
        case REGISTER_FAILURE:
            return {
                ...state,
                error: payload,
                pending: false,
            };
        default:
            return state;
    }
};

