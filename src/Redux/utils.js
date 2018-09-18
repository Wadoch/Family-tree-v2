export const createRequestReducer = (initialState, actionTypes) => (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.request:
            return {
                ...state,
                pending: true,
            };
        case actionTypes.success:
            return {
                ...state,
                data: action.payload.data ? action.payload.data : action.payload,
                pending: false,
            };
        case actionTypes.failure:
            return {
                ...state,
                error: true,
                pending: false,
                message: action.payload.response.message,
            };
        default:
            return state;
    }
};
