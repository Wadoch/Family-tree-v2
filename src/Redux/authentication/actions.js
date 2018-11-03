import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    VERIFY_JWT_REQUEST,
    VERIFY_JWT_FAILURE,
    VERIFY_JWT_SUCCESS,
} from './types';
import {
    encryptUserCredentials,
    getResponseFromEndpoint,
    setJWT,
    removeJWT,
    getJWT,
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

const requestVerifyJwt = () => ({
    type: VERIFY_JWT_REQUEST,
});

const successVerifyJwt = user => ({
    type: VERIFY_JWT_SUCCESS,
    userToken: user.token,
});

const failureVerifyJwt = () => ({
    type: VERIFY_JWT_FAILURE,
});

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
            // const response = await getResponseFromEndpoint('https://ps-family-tree-bff.herokuapp.com/authentiacte', config);
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/authenticate`, config);
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

export const verifyJWT = () => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({userToken: getJWT()}),
    };

    return async dispatch => {
        dispatch(requestVerifyJwt());

        if(!getJWT()) {
            dispatch(failureVerifyJwt());
        }

        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/verify`, config);

            if(response.statusCode === 200) {
                const jwt = response.data.idToken;

                setJWT(jwt);
                dispatch(successVerifyJwt({token: jwt}));
            }
            else {
                removeJWT();
                throw response;
            }

        } catch(err) {
            removeJWT();
            dispatch(failureVerifyJwt(err));
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