const initialState = {

    disciplinesList: [],
    resourcesList:[],

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SAVE_DISCIPLINE':
            return {
                ...state,
                disciplinesList: action.discipline,
            }
        case 'SAVE_RESOURCE':
            return {
                ...state,
                resourcesList: action.resource,
            }
        default:
            return state;
    }
};

export default reducer;