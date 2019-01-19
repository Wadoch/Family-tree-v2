import {
    ADD_NEW_PERSON_SUCCESS,
    REMOVE_PERSON_SUCCESS,
} from './types';
import {getSingleFamily} from '../family/actions';

export default ({ dispatch }) => next => (action) => {
    const { type, payload } = action;
    const actionOfType = lookedFor => type === lookedFor;
    if(actionOfType(ADD_NEW_PERSON_SUCCESS) || actionOfType(REMOVE_PERSON_SUCCESS)) {
        dispatch(getSingleFamily(payload.familyId));
    }

    return next(action);
}