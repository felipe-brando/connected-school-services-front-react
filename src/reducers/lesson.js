const initialState = {

    disciplinesList: [],
    resourcesList:[],

    currentDiscipline: "Français",

};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        
        case 'SAVE_DISCIPLINE':{
            console.log('Reducer:', action);
            return {
                ...state,
                disciplinesList: action.discipline,
            }}
        case 'SAVE_RESOURCE':
            return {
                ...state,
                resourcesList: action.resource,
            }
        case 'CHANGE_SELECT_DISCIPLINE':
            return {
                ...state,
                currentDiscipline: action.value,

            }
        default:
            return state;
    }
};

export default reducer;