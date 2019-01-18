import {
    ADD_NEW_FAMILY_SUCCESS,
    REMOVE_FAMILY_SUCCESS,
} from './types';

import {getAllFamilies} from './actions';

export default ({ dispatch }) => next => (action) => {
    const { type, payload } = action;

    const actionOfType = lookedFor => type === lookedFor;

    if (actionOfType(ADD_NEW_FAMILY_SUCCESS) || actionOfType(REMOVE_FAMILY_SUCCESS)) {
        dispatch(getAllFamilies());
    }

    return next(action);
};
