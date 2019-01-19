import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';

import familyMiddleware from './family/middleware';
import personMiddleware from './person/middleware';

export default [
    apiMiddleware,
    thunk,
    personMiddleware,
    familyMiddleware,
];