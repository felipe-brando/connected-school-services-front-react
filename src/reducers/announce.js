export const initialState = {
    announceList: [{
        id: 1,
        title: 'Menu de la cantine',
        content: 'Le menu de la cantine: Lundi des patates, Mardi des patates, Mercredi des patates aussi...',
        image: '',
        category: [{ id: 1, name: 'Cantine' }],
        createdAt: '12/12/12',
        homework: ''
    }, {
        id: 2,
        title: 'Bal de fin d\'année',
        content: 'Programme : Repas, dancing et plus si affinité',
        image: '',
        category: [{ id: 1, name: 'Bal de promo' }],
        createdAt: '12/12/12',
        homework: ''
    }, {
        id: 3,
        title: 'Inscriptions des nouveaux élèves',
        content: 'Inscriptions des nouveaux élèves dès le mois de janvier 2022. Se présenter au batiment A',
        image: '',
        category: [{ id: 1, name: 'Global' }],
        createdAt: '12/12/12',
        homework: ''
    }, {
        id: 4,
        title: 'Programmation fonctionnelle',
        content: 'Exercices JS 3,4 et 5',
        image: '',
        category: [{ id: 1, name: 'Sixième A' }],
        createdAt: '12/12/12',
        homework: ''
    }, {
        id: 5,
        title: 'Sortie au zoo',
        content: 'Sortie au zoo mercredi prochain pour tous les élèves',
        image: '',
        category: [{ id: 1, name: 'Sortie Scolaire' }],
        createdAt: '12/12/12',
        homework: ''
    }],

    currentAnnounce: {
        id: 5,
        title: 'Sortie au zoo',
        content: 'Sortie au zoo mercredi prochain pour tous les élèves',
        image: '',
        category: [{ id: 1, name: 'Sortie Scolaire' }],
        createdAt: '12/12/12',
        homework: ''
    },
    newAnnounceTitle: 'tittre',
    newAnnounceContent: 'content',
    newAnnounceimage: '',
    newAnnouncecategory: 'test',
    newAnnouncehomework: 'ok',
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
        case 'CHANGE_INPUT_TITLE':
            return {
                ...state,
                newAnnounceTitle: action.value,
            }
        case 'CHANGE_INPUT_CONTENT':
            return {
                ...state,
                newAnnouncecontent: action.value
            }
        case 'CHANGE_SELECT_OPTION':
            return {
                ...state,
                newAnnouncecategory: action.value,
            }
        case 'CHANGE_INPUT_IMAGE':
            return {
                ...state,
                newAnnounceimage: action.value
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

        default:
            return state;
    };
};

export default reducer;

