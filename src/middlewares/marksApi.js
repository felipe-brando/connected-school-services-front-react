import axios from 'axios';
import { apiUrl } from '../selectors/baseUrl';

const marksApi = (store) => (next) => (action) => {

    const state = store.getState(); // access to store then state
    const token = state.user.token;
  
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
        currentDisciplines:response.data,
        currentAverages: response.data,
      });
    })

    if (action.type === 'SAVE_RESOURCE') { 
      axios.get(url + "lesson", config)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_RESOURCE',
          resource: response.data,
        });
      })
    
    .catch((error) => {
      console.error('GET_CURRENT_MARKS error : ', error);
    });
   }
  }
  next(action);
};

export default marksApi;