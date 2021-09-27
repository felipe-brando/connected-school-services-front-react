const initialState = {

    disciplinesList: [],

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SAVE_DISCIPLINE':
            return {
                ...state,
                disciplinesList: action.discipline,
            }
        default:
            return state;
    }
};

export default reducer;