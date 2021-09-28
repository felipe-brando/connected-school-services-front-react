import axios from 'axios';
import { apiUrl } from '../selectors/baseUrl';

const announceApi = (store) => (next) => (action) => {

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

  if (action.type === 'GET_ANNOUNCE_LIST') {
    if (action.filter === 'categories') {
      axios.get(url + "announce/sortedby/" + action.categoryId, config)
        .then((response) => {
          store.dispatch({
            type: 'SAVE_ANNOUNCE_LIST',
            announceList: response.data,
          });
        })
        .catch((error) => {
          console.error('GET_ANNOUNCE_LIST error : ', error);
        });
    } else {
      axios.get(url + "homeannounce")
        .then((response) => {
          store.dispatch({
            type: 'SAVE_ANNOUNCE_LIST',
            announceList: response.data,
          });
        })
        .catch((error) => {
          console.error('GET_ANNOUNCE_LIST error : ', error);
        });
    }
  }

  if (action.type === 'GET_ANNOUNCE_BY_ID') {
    axios.get(url + "homeannounce/" + action.id)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CURRENT_ANNOUNCE',
          currentAnnounce: response.data,
        });

        store.dispatch({
          type: 'GET_TEXT_EDITOR_VALUE_TO_MODIFY',
          editorValue: response.data.content,
        })
      })
      .catch((error) => {
        console.error('SAVE_CURRENT_ANNOUNCE error : ', error);
      });
  }

  if (action.type === 'GET_ANNOUNCE_LIST_BY_CLASS_ID') {
    axios.get(url + "announce/sortedbyclassroom/" + action.id, config)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CLASSROOM_ANNOUNCE_LIST',
          announceList: response.data,
        });
      })
      .catch((error) => {
        console.error('GET_ANNOUNCE_LIST_BY_CLASS_ID error : ', error);
      });
  }


  if (action.type === 'GET_CATEGORY_LIST') {
    axios.get(url + "category/", config)
      .then((response) => {
        store.dispatch({
          type: 'SAVE_CATEGORY_LIST',
          categoryList: response.data,
        });
      })
      .catch((error) => {
        console.error('GET_CATEGORY_LIST error : ', error);
      });
  }

  //---POST Requests
  if (action.type === 'SUBMIT_ANNOUNCE') {
    axios({
      method: 'POST',
      url: url + "announce/",
      data: {
        "title": state.announce.newAnnounceTitle,
        "content": state.textEditor.editorContent,
        "images": {
          "name": state.announce.newAnnounceImageName,
          "value": state.announce.newAnnonceImageBase64,
        },
        "category": [state.announce.newAnnounceCategoryId]
      },
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((response) => { console.log(response); console.log('ok'); })
  }

  //---DELETE and MODIFY requests
  if (action.type === 'DELETE_ANNOUNCE_BY_ID') {
    axios.delete(url + "announce/" + action.id, config)
      .then((response) => {
        store.dispatch({
          type: 'GET_ANNOUNCE_LIST',
          flashMessage: response.data.ok,
        });
      })
      .catch((error) => {
        console.error('DELETE_ANNOUNCE_BY_ID error : ', error);
      });
  }

  if (action.type === 'SUBMIT_MODIFIED_ANNOUNCE') {
    console.log('envoi annonce pour modification');
    axios({
      method: 'PATCH',
      url: url + "announce/" + action.id,
      data: {
        "title": state.announce.currentAnnounce.title,
        "content": state.textEditor.editorContent,
        // "images": {
        //   "name": state.announce.newAnnounceImageName,
        //   "value": state.announce.newAnnonceImageBase64,
        // },
        "category": [state.announce.currentAnnounce.category[0].id]
      },
      headers: {
        Authorization: "Bearer " + token,
      }
    }).then((response) => { console.log(response); console.log('ok'); })
  }

  next(action); // dans tous les cas je laisse passer l'action
};

export default announceApi;

