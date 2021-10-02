const initialState = {
    disciplinesList: [],

    currentDiscipline: "Français",
    
    resourcesList: [{
        id: '',
        title: '',
        content: '',
        createdAt: '',
        discipline: [],
    }],

    currentResource:  [{
        id: '',
        title: '',
        content: '',
        createdAt: '',
        discipline: [],
    }],

    selected: null,

    textEditorOpen: false,
    newResourceTitle: '',
    newResourceContent: '',
    newDisciplineId: '',

    flashMessageContent: "",

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

        case 'CHANGE_INPUT_RESOURCE_TITLE':
            return {
                ...state,
                newResourceTitle: action.value,
            }

        case 'CHANGE_INPUT_RESOURCE_CONTENT':
            return {
                ...state,
                newResourceContent: action.value,
            }

        case 'ADD_RESOURCE_RESET_INITIAL_STATE': {
            return {
                ...state,
                newResourceTitle: "",
                newResourceContent: "",
                flashMessageContent: "L'annonce a bien été envoyée",
            }
        }
        default:
            return state;
    }
};

export default reducer;