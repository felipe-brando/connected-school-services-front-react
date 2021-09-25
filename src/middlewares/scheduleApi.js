import axios from 'axios';

const scheduleApi = (store) => (next) => (action) => {

    const state = store.getState(); // access to store then state
    const token = state.user.token;
  
    //config provisoire
    // const url = 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api/v1/';
    // const url = 'http://kevin-planchais.vpnuser.lan/Apoth%C3%A9ose/projet-connected-school-services/public/api/v1/';
    const url = 'http://ec2-3-80-208-180.compute-1.amazonaws.com/projet-connected-school-services/public/api/v1/';
    
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      }
    }
  
  if (action.type === 'GET_CURRENT_SCHEDULE') { 
    axios.get(url + "planning", config)
    .then((response) => {
      store.dispatch({
        type: 'SAVE_CURRENT_SCHEDULE',
        currentSchedule: response.data,
      });
    })
    .catch((error) => {
      console.error('GET_CURRENT_SCHEDULE error : ', error);
    });
    
  }
  next(action); // dans tous les cas je laisse passer l'action
};

export default scheduleApi;