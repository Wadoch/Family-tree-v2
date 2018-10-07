import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './types';
import { encryptUserCredentials, getResponseFromEndpoint, setJWT } from '../utils';

export const requestLogin = credentials => ({
    type: LOGIN_REQUEST,
    credentials,
});

export const successLogin = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        userToken: user.token,
    },
});

export const failureLogin = error => ({
    type: LOGIN_FAILURE,
    error,
});

export const loginUser = (credentials) => {
    let encryptedUser = encryptUserCredentials(credentials);
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(encryptedUser),
    };

    return async dispatch => {
        dispatch(requestLogin(credentials));

        try {
            const response = await getResponseFromEndpoint('http://localhost:8000/authenticate', config);

            if(response.statusCode === 200) {
                const jwt = response.data.idToken;
                setJWT(jwt);
                dispatch(successLogin({token: jwt}));
            }
            else {
                throw response;
            }
        } catch(err) {
            dispatch(failureLogin(err));
        }
    };
};