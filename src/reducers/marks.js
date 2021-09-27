const initialState = {
    marks: [],
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SAVE_CURRENT_MARKS':
            return {
                ...state,
                marks: action.currentMarks,
            }
        default:
            return state;
    }
};

export default reducer;