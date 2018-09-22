import { RSAA } from 'redux-api-middleware';

import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
} from './types';

export const registerUser = ({ endpoint }) => ({
    [RSAA]: {
        endpoint: `${endpoint}`,
        method: 'GET',
        types: [
            REGISTER_REQUEST,
            REGISTER_SUCCESS,
            REGISTER_FAILURE,
        ],
    },
});