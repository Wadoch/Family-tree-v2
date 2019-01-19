import {ADD_NEW_PERSON_FAILURE, ADD_NEW_PERSON_REQUEST, ADD_NEW_PERSON_SUCCESS, OPEN_ADD_NEW_PERSON} from "./types";

const initialState  = {
    addPersonOpen: false,
    pending: false,
    error: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_PERSON_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case ADD_NEW_PERSON_SUCCESS:
            return {
                ...state,
                addPersonOpen: false,
                pending: false,
            };
        case ADD_NEW_PERSON_FAILURE:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };
        case OPEN_ADD_NEW_PERSON:
            return {
                ...state,
                addPersonOpen: !state.addPersonOpen,
            };
        default:
            return state;
    }
}