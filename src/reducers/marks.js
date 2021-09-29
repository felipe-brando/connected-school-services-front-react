const initialState = {
    userList: [],
    discipline: [],
    grade: [],
  };
  

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SAVE_CURRENT_MARKS':
            return {
                ...state,
                grade: action.currentMarks,
                discipline: action.currentMeasures,
            }
        default:
            return state;
    }
};

export default reducer;