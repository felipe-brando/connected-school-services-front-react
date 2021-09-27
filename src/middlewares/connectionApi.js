import axios from 'axios';

const connectionApi = (store) => (next) => (action) => {
    //You can create a new instance of axios with a custom config
    const api = axios.create({
        baseURL: 'http://ec2-3-80-208-180.compute-1.amazonaws.com/projet-connected-school-services/public/api',
    });

    if (action.type === 'LOGIN') {
        const state = store.getState();
        api.post('/login_check', {
            username: state.user.email,
            password: state.user.password,
        })
            .then((response) => {
                //conditionnal variable when ROLE_ADMIN classroom is null 
                const classroomId = response.data.data.classroom ? response.data.data.classroom.id : [];
                const classroomName = response.data.data.classroom ? response.data.data.classroom.grade+"ème "+response.data.data.classroom.letter.toUpperCase() : "";
                //api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
                store.dispatch({
                    type: 'SAVE_USER',
                    firstname: response.data.data.firstname,
                    token: response.data.token,
                    roles: response.data.data.roles,
                    classroomId: classroomId,
                    classroomName: classroomName,
                    userId: response.data.data.id,
                });
            })
            .catch((error) => {
                console.error(error);
                alert('Authentification échouée');
            });
    }
    next(action);
};


export default connectionApi;