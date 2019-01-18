import {apiMiddleware} from 'redux-api-middleware';
import thunk from 'redux-thunk';

import familyMiddleware from './family/middleware';

export default [
    apiMiddleware,
    thunk,
    familyMiddleware,
];