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
  if (action.type === 'SUBMIT_NEW_RESOURCE') {
    axios({
      method: 'POST',
      url: url + "lesson/",
      data: {
        "title": state.lesson.newResourceTitle,
        "content": state.textEditor.editorContent,
        "discipline": { 
          id:action.disciplineId, 
        },
      },
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((response) => {

      store.dispatch({
        type: 'ADD_RESOURCE_RESET_INITIAL_STATE',
      })
      //TODO - flash message if response is ok, delete input value (and go back to previous page ?)
      console.log(response);
      console.log('flash message envoi annonce');

      //if announce is submit

    })
  }
  next(action); 
};

export default lessonApi;