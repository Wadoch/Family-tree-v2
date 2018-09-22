import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import reducers from '../Redux/reducers';
import middleware from '../Redux/middlewares';

export default createStore(combineReducers(reducers), applyMiddleware(...middleware));

