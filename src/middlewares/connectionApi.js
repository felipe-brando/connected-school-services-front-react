import axios from 'axios';

const connectionApi = (store) => (next) => (action) => {
    //You can create a new instance of axios with a custom config
    const api = axios.create({
        baseURL: 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api',
      });

    if (action.type === 'LOGIN') { 
    const state = store.getState(); 
    api.post('/login_check', { 
        username: state.user.email,
        password: state.user.password,
    })
        .then((response) => {
            console.log(response);
            //api.defaults.headers.common.Authorization = `bearer ${response.data.token}`;
            store.dispatch({
            type: 'SAVE_USER',
            firstname: response.data.data.Prénom,
            token: response.data.token,
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