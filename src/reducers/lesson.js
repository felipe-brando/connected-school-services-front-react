const initialState = {

    disciplinesList: [],
    resourcesList:[],

    currentDiscipline: "Français",

    accordionOpen: false,

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
                accordionOpen: !state.accordionOpen,

            }
        default:
            return state;
    }
};

export default reducer;