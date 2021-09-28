import axios from 'axios';
import { apiUrl } from '../selectors/baseUrl';

const marksApi = (store) => (next) => (action) => {

    const state = store.getState(); // access to store then state
    const token = state.user.token;
  
    //config provisoire
    // const url = 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api/v1/';
    // const url = 'http://kevin-planchais.vpnuser.lan/Apoth%C3%A9ose/projet-connected-school-services/public/api/v1/';
    const url = apiUrl;
    
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      }
    }
  
  if (action.type === 'GET_CURRENT_MARKS') { 
    axios.get(url + "note/sortedbystudents/" + action.id, config)
    .then((response) => {      
      store.dispatch({
        type: 'SAVE_CURRENT_MARKS',
        currentMarks: response.data,
      });
    })
    .catch((error) => {
      console.error('GET_CURRENT_MARKS error : ', error);
    });
    
  }
  next(action);
};

export default marksApi;