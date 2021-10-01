const initialState = {

    disciplinesList: [],
    resourcesList:[],

    currentDiscipline: "Français",

    selected: null,

    textEditorOpen: false,


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
        case 'ACCORDION_OPEN':
            return {
                ...state,
                selected: action.index,

            }
        case 'ACCORDION_CLOSE':
            return {
                ...state,
                selected: null,

            }
        case 'OPEN_RESOURCES_TEXT_EDITOR':
            return {
                ...state,
                textEditorOpen: !state.textEditorOpen,
            }
        default:
            return state;
    }
};

export default reducer;