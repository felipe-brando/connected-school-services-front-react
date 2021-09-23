export const initialState = {
    announceList: [{
        id: '',
        title: 'Connexion',
        content: '',
        image: '',
        category: [],
        createdAt: '',
        homework: ''
    }],

    currentAnnounce: {
        id: '',
        title: 'Connexion',
        content: '',
        image: '',
        category: [],
        createdAt: '',
        homework: ''
    },
    newAnnounceTitle: '',
    newAnnounceContent: '',
    newAnnounceimage: '',
    newAnnouncecategory: 'test',
    newAnnouncehomework: 'ok',

    categoryList: [],
};

const reducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case 'SAVE_ANNOUNCE_LIST':
            return {
                ...state,
                announceList: action.announceList,
            }
        case 'SAVE_CURRENT_ANNOUNCE':
            return {
                ...state,
                currentAnnounce: action.currentAnnounce,
            }
        // case 'SAVE_NEW_ANNOUNCE': {
        //     console.log(action.newAnnounce)
        //     return {
        //          ...state,
        //         newAnnounceTitle: action.newAnnounce.title,
        //         newAnnounceContent: action.newAnnounce.content,
        //         // newAnnounceimage: action.newAnnonce.image,
        //         // newAnnouncecategory: action.newAnnonce.category[0].name,
        //         // newAnnouncehomework: action.newAnnonce.homework,
        //     }}
        case 'CHANGE_INPUT_TITLE':
            return {
                ...state,
                newAnnounceTitle: action.value,
            }
        case 'CHANGE_INPUT_CONTENT':
            return {
                ...state,
                newAnnounceContent: action.value
            }
        case 'CHANGE_SELECT_OPTION':
            return {
                ...state,
                newAnnouncecategory: action.value,
            }
        case 'CHANGE_INPUT_IMAGE':
            return {
                ...state,
                newAnnounceImage: action.value
            }
        case 'CHANGE_INPUT_HOMEWORK':
            return {
                ...state,
            }
        case 'SUBMIT_ANNOUNCE': {
            console.log(
                state.newAnnounceTitle,
                state.newAnnouncecontent,
                state.newAnnounceimage,
                state.newAnnouncecategory,
                state.newAnnouncehomework
            );
            return {
                ...state,
            }
        }
        case 'SAVE_CATEGORY_LIST':
            return {
                ...state,
                categoryList: action.categoryList
            }

        default:
            return state;
    };
};

export default reducer;
