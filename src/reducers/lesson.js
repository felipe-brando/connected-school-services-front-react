export const initialState = {
    content: "Le terme leçon est emprunté vers 1135 au latin kk[pas clair] : la notion de lecture et le fait de lire sont concomitants du mot. En effet, leçon a alors le sens de « texte sacré » : lectionem étant laccusatif de lectio, lecture, il est logique que leçon signifie « texte lu » dès son origine. Ce sens originel perdurera jusqu'à nos jours : la leçon dun texte est, en philologie, lune des versions de ce texte (en général pour parler des textes anciens : on dira, par exemple, que La Chanson de Roland a plusieurs leçons).",

    isPrivate: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;