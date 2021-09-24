import axios from 'axios';

const announceApi = (store) => (next) => (action) => {

  const state = store.getState(); // access to store then state
  const token = state.user.token;

  //config provisoire
  const url = 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api/v1/';
  // const url = 'http://kevin-planchais.vpnuser.lan/Apoth%C3%A9ose/projet-connected-school-services/public/api/v1/';


<<<<<<< HEAD

  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzIzODEwOTUsImV4cCI6MTYzMjQ2NzQ5NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGNzcy5pbyJ9.kcq0zT7iUSqAxZet3h0CcDnnfEtS9aN3uCa3RyEvvieYbSi1tjhfW2ETHE1epfVDtVnEaZce_DYt5WKD6EoKIw78ym8AxRVZPouqa7F7moMoGnLf87oZyOXZwCNxy8WKWaFBKu9M9gnatWlQpbWv6m6d5Kn3KtkzuoOunQM6btdYSFmxGcZvadZyShipowQgOHexx0CY2R3yut4RGV8B3Twg49r73v2GBSu2miFnhfc9c0oHs7NQRmh70lAem00Ke72Hn1Aw--pnqEXH1_ABbyk7Vus3Vl3fWItgTGE5xpkCYc5HchKkS0WrIlbiYg2I4KBXzWBJ_iyv27xpFgyYmA";
=======
>>>>>>> feature/announces2
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    }
  }

  //---GET Requests

  if (action.type === 'GET_ANNOUNCE_LIST') {
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

    console.log(state.announce.newAnnounceTitle, "et" , state.announce.newAnnonceImageFile);

    const AnnounceFormData = new FormData();
    AnnounceFormData.append("image", state.announce.newAnnonceImageFile);
    AnnounceFormData.append("title", state.announce.newAnnounceTitle);
    AnnounceFormData.append("content", state.announce.newAnnounceContent);

    console.log(AnnounceFormData);

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

