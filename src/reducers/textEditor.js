const initialState = {
    editorContent:"",
    editorModifyBaseValue: "",
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'SET_TEXT_EDITOR_CONTENT':
            return {
                ...state,
                editorContent: action.editorContent,
            }

        default:
            return state;
    };
};

export default reducer;
