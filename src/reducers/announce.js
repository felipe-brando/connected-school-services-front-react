const initialState = {
    announceList: [{
        id: '',
        title: 'Problème de Connexion',
        content: '',
        image: '',
        category: [],
        createdAt: '',
        homework: ''
    }],

    currentAnnounce: {
        id: '',
        title: 'Problème de Connexion',
        content: '',
        image: '',
        category: [],
        createdAt: '',
        homework: ''
    },
    newAnnounceTitle: '',
    newAnnounceContent: '',
    newAnnounceImage: '',
    newAnnonceImageFile: '',
    newAnnounceCategory: 'test',
    newAnnounceHomework: 'ok',

    newCategoryInputValue: '',

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
        //         // newAnnounceImage: action.newAnnonce.image,
        //         // newAnnounceCategory: action.newAnnonce.category[0].name,
        //         // newAnnounceHomework: action.newAnnonce.homework,
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
                newAnnounceCategory: action.value,
            }
        case 'CHANGE_INPUT_IMAGE': { 
            console.log(action);
            return {
                ...state,
                newAnnounceImage: action.value,
                newAnnonceImageFile: action.fileValue,
            }}
        case 'CHANGE_INPUT_HOMEWORK':
            return {
                ...state,
            }
        // case 'SUBMIT_ANNOUNCE': {
        //     console.log(
        //         state.newAnnounceTitle,
        //         state.newAnnouncecontent,
        //         state.newAnnounceImage,
        //         state.newAnnounceCategory,
        //         state.newAnnounceHomework
        //     );
        //     return {
        //         ...state,
        //     }
        // }
        case 'CHANGE_INPUT_CATEGORY':
            return {
                ...state,
                newCategoryInputValue: action.value
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
