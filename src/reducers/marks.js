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
            }
        default:
            return state;
    }
};

export default reducer;