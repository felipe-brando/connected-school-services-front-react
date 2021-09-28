import axios from 'axios';

const announceApi = (store) => (next) => (action) => {

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

    //**-------Tests------**//

    console.log(state.announce.newAnnounceTitle,
       "et", state.announce.newAnnonceImageFile,
       "et", state.announce.newAnnounceCategoryId,
       "et", state.textEditor.editorContent );

    const AnnounceFormData = new FormData();
    AnnounceFormData.append("image", state.announce.newAnnonceImageFile);
    AnnounceFormData.append("title", state.announce.newAnnounceTitle);
    AnnounceFormData.append("content", state.announce.newAnnounceContent);
    AnnounceFormData.append("category", state.announce.newAnnounceCategoryId)   

    // axios({
    //   method: "POST",
    //   url: url + "announce/",
    //   data: AnnounceFormData,
    //   headers: {
    //     Authorization: "Bearer " + token,
    //     'Content-Type': 'multipart/form-data; boundary=axiosFromCSS'

    //   }
    // })


    //**--------------- */

    //   axios({
    //     method: 'POST',
    //     url: url + "announce/",
    //     data: {
    //       "title": state.announce.newAnnounceTitle,
    //       "content": state.announce.newAnnounceContent,
    //       "image": state.announce.newAnnounceImage,
    //       "category": []
    //     },
    //     headers: {
    //       Authorization: "Bearer " + token,
    //     }
    //   }).then((response) => {console.log(response);console.log('ok');})
  }

  //---DELETE and MODIFY requests
  if (action.type === 'DELETE_ANNOUNCE_BY_ID') {
    axios.delete(url + "announce/" + action.id, config)
      .then((response) => {
        console.log(response);
        store.dispatch({
          type: 'GET_ANNOUNCE_LIST',
          flashMessage: response.data.ok,
        });
      })
      .catch((error) => {
        console.error('DELETE_ANNOUNCE_BY_ID error : ', error);
      });
  }
  // if (action.type === 'GET_ANNOUNCE_TO_MODIFY') {
  //   axios.get(url + "announce/" + action.id, config)
  //     .then((response) => {
  //       store.dispatch({
  //         type: 'SAVE_NEW_ANNOUNCE',
  //         newAnnounce: response.data,
  //       });
  //     })
  //     .catch((error) => {
  //       console.error('SAVE_CURRENT_ANNOUNCE error : ', error);
  //     });
  // }



  next(action); // dans tous les cas je laisse passer l'action
};

export default announceApi;

