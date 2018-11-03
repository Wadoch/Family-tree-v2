import crypto from 'crypto-js';

const JWT_TOKEN = 'user-jwt';

const encryptData = (data, hashKey) => {
    return crypto.AES.encrypt(data, hashKey).toString();
};

export const encryptUserCredentials = ({username, password, email}) => ({
    username: username,
    password: encryptData(password, process.env.REACT_APP_CRYPTO_KEY),
    email: email,
});

export const getJWT = () => localStorage.getItem(JWT_TOKEN);
export const setJWT = (jwt) => localStorage.setItem(JWT_TOKEN, jwt);
export const removeJWT = () => localStorage.removeItem(JWT_TOKEN);

export const getResponseFromEndpoint = async (endpoint, config) => {
    const response = await fetch(endpoint, config);
    return await response.json();
};
