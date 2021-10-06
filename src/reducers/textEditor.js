const initialState = {
    editorContent: "",
    editorModifyBaseValue: "",
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'SET_TEXT_EDITOR_CONTENT':
            return {
                ...state,
                editorContent: action.editorContent,
            }
        case 'GET_TEXT_EDITOR_VALUE_TO_MODIFY':
            return {
                ...state,
                editorModifyBaseValue: action.editorValue,
            }
            case 'CLEAN_EDITOR_CONTENT':
                return {
                    ...state,
                    editorModifyBaseValue: "",
                }

        default:
            return state;
    };
};

export default reducer;
