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
    newAnnounceCategoryId: 0,
    newAnnounceHomework: 'ok',
    newAnnounceImageName: '',
    newAnnonceImageBase64: '',
    newCategoryInputValue: '',

    categoryList: [],

    // Homeworks initial state
    classroomAnnounces: [],
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
        case 'SAVE_CLASSROOM_ANNOUNCE_LIST': {
            console.log(action.newAnnounce)
            return {
                ...state,
                classroomAnnounces: action.announceList
            }
        }
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
        case 'CHANGE_SELECT_ANNOUNCE':
            return {
                ...state,
                newAnnounceCategoryId: action.value,
            }
        case 'CHANGE_INPUT_IMAGE': {
            console.log(action);
            return {
                ...state,
                newAnnounceImageName: action.imgName,
                newAnnonceImageBase64: action.fileValue,
            }
        }
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
