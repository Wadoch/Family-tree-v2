import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
} from './types';
import {
    encryptUserCredentials,
    getResponseFromEndpoint,
    setJWT,
    removeJWT,
} from '../utils';

const requestLogin = credentials => ({
    type: LOGIN_REQUEST,
    credentials,
});

const successLogin = user => ({
    type: LOGIN_SUCCESS,
    payload: {
        userToken: user.token,
    },
});

const failureLogin = () => ({
    type: LOGIN_FAILURE,
});

const requestLogout = () => ({
    type: LOGOUT_REQUEST,
});

const successLogout = () => ({
    type: LOGOUT_SUCCESS,
});

const failureLogout = () => ({
    type: LOGOUT_FAILURE,
});

// TODO: fix bff
// TODO: store last error

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
            const response = await getResponseFromEndpoint('https://ps-family-tree-bff.herokuapp.com/authentiacte', config);
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

export const logoutUser = () => dispatch => {
    dispatch(requestLogout());
    try {
        removeJWT();
        dispatch(successLogout());
    }
    catch (err) {
        dispatch(failureLogout(err));
    }
};