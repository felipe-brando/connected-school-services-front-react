import axios from 'axios';
import { apiUrl } from '../selectors/baseUrl';

const lessonApi = (store) => (next) => (action) => {

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

   //---GET Requests

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

  //---POST Requests
  if (action.type === 'SEND_NEW_RESOURCE') {
    const state = store.getState();
    axios.post(url + 'lesson/', {
      title: state.lesson.newResourceTitle,
      content: state.textEditor.editorContent,
      discipline: action.disciplineId

    }, config)
    .then(function (response) {

      store.dispatch({
      
        type: 'ADD_RESOURCE',
        newResource: response.data,
      
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  next(action); 
};

export default lessonApi;