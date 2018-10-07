import crypto from 'crypto-js';

const JWT_TOKEN = 'user-jwt';

const encryptData = (data, hashKey) => {
    return crypto.AES.encrypt(data, hashKey).toString();
};

export const encryptUserCredentials = ({username, password}) => ({
    username: username,
    password: encryptData(password, '9vApxLk5G3PAsJrMFnJL7EDzjqWjcaY9'),
});

//stare jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkZTY3MTI0MC1iZmRiLTExZTgtYmJjZS1hNzUwMDA1MzI5OTkiLCJ1c2VybmFtZSI6ImR1cGExMjMiLCJpYXQiOjE1MzgxMzMwNjcsImV4cCI6MTUzODEzNjY2N30.TNENeJPLN8OZQHgGIGfp8XEqvlGtME-G_WgA7FG79n8
export const getJWT = () => localStorage.getItem(JWT_TOKEN);
export const setJWT = (jwt) => localStorage.setItem(JWT_TOKEN, jwt);
export const removeJWT = () => localStorage.removeItem(JWT_TOKEN);

export const getResponseFromEndpoint = async (endpoint, config) => {
    const response = await fetch(endpoint, config);
    return await response.json();
};
