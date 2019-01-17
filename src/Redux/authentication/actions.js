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
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
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

const requestRegister = credentials => ({
    type: REGISTER_REQUEST,
    credentials,
});

const successRegister = user => ({
    type: REGISTER_SUCCESS,
    payload: {
        userToken: user.token,
    },
});

const failureRegister = () => ({
    type: REGISTER_FAILURE,
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

export const registerUser = (credentials) => {
    let encryptedUser = encryptUserCredentials(credentials);
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(encryptedUser),
    };

    return async dispatch => {
        dispatch(requestRegister(credentials));
        try {
            const response = await getResponseFromEndpoint(`${process.env.REACT_APP_BFF_URL}/register`, config);
            if(response.statusCode === 200) {
                const jwt = response.data.idToken;
                setJWT(jwt);
                dispatch(successRegister({token: jwt}));
            }
            else {
                throw response;
            }
        } catch (err) {
            dispatch(failureRegister());
        }
    };
};

export const verifyJWT = () => {
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getJWT(),
        },
    };

    return async dispatch => {
        dispatch(requestVerifyJwt());

        try {
            if(!getJWT()) {
                throw 'Missing JWT';
            }
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