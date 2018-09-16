import {
    createStore,
    combineReducers,
    applyMiddleware,
} from 'redux';

import thunk from 'redux-thunk';

import reducers from '../Redux/reducers';

export default createStore(combineReducers(reducers), applyMiddleware(thunk));

