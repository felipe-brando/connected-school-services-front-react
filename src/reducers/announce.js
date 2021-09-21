export const initialState = {
    announceList: [{
        id:1,
        title: 'Menu de la cantine',
        content: 'Le menu de la cantine: Lundi des patates, Mardi des patates, Mercredi des patates aussi...',
        image: '',
        categories: ['Cantine'],
        date:'12/12/12'
    }, {
        id:2,
        title: 'Bal de fin d\'année',
        content: 'Programme : Repas, dancing et plus si affinité',
        image: '',
        categories: ['Bal de promo'],
        date:'12/12/12'
    }, {
        id:3,
        title: 'Inscriptions des nouveaux élèves',
        content: 'Inscriptions des nouveaux élèves dès le mois de janvier 2022. Se présenter au batiment A',
        image: '',
        categories: ['Global'],
        date:'12/12/12'
    }, {
        id:4,
        title: 'Programmation fonctionnelle',
        content: 'Exercices JS 3,4 et 5',
        image: '',
        categories: [
            'Devoirs', 
            'Sixième A',
        ],
        date:'12/12/12'
    }, {
        id:5,
        title: 'Sortie au zoo',
        content: 'Sortie au zoo mercredi prochain pour tous les élèves',
        image: '',
        categories: [
            'Evénements', 
            'Sortie Scolaire',
        ],
        date:'12/12/12'
    }],

    currentAnnounce:{
        id:5,
        title: 'Sortie au zoo',
        content: 'Sortie au zoo mercredi prochain pour tous les élèves',
        image: '',
        categories: [
            'Evénements', 
            'Sortie Scolaire',
        ],
        date:'12/12/12'
    }
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;
