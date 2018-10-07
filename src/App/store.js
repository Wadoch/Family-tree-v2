import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';

import reducers from '../Redux/reducers';
import middleware from '../Redux/middlewares';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(combineReducers(reducers), composeEnhancers(applyMiddleware(...middleware)));

