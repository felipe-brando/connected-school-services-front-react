const initialState = {
    userList: [],
    discipline: [],
    grade: [],
    average:[],
    content: '',
  };
  

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'SAVE_CURRENT_MARKS':
            return {
                ...state,
                grade: action.currentMarks,
                discipline: action.currentMeasures,
                average: action.currentAverages,
            }
            case 'SAVE_RESOURCE':
            return {
                ...state,
                resourcesList: action.resource,
            };
        default:
            return state;
    }
};

export default reducer;