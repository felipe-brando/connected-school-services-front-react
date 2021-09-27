import axios from 'axios';

const lessonApi = (store) => (next) => (action) => {

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
  
  if (action.type === 'FETCH_RESOURCES') { 
    axios.get(url + "lesson", config)
    .then((response) => {
      store.dispatch({
        type: 'SAVE_RESOURCE',
        resource: response.data,
      });
    })
    .catch((error) => {
      console.error('FETCH_RESOURCES error : ', error);
    });
    
  }
  next(action); 
};

export default lessonApi;