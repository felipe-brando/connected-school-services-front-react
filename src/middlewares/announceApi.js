import axios from 'axios';

const announceApi = (store) => (next) => (action) => {
  //const state = store.getState(); // j'ai accès au store dans les middlewares donc au state
  //config provisoire
  const url = 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api/v1/';
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzIzMTAwNjUsImV4cCI6MTYzMjMxMzY2NSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGNzcy5pbyJ9.ftHa9fr5peG-p3HlOihjS5OyeHsvIrDJ5e3e1QkQuPacpFT0WbvMwhCHm8BhUVyjNWvFOkn_bEUr52-BsBSvW8aaLqfvECKmyKCNzRtSlv1ZrYDIJdO1I6Al0RPR6wM3bhIFO3m9bGDwx83JfHjj1Eh61xEmUtl9HRfEBpEFUXb58rcb4I7x5qvmf7djMWG4J50k_PDKKQH900gYsgrWidWMl1kriYdVBgpwxSkUsJaNxit__yiYSI2es8BOepIkz46EJ-MYhUCeNgA_xIruKBIXR9d8twtAokN3RlY0PvfCo4t6GVEYhZaQiCziIzCdalofEGNfVh689L3hbK4FNQ";

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    }
  }
  if (action.type === 'GET_ANNOUNCE_LIST') {
    console.log('GET_ANNOUNCE_LIST');
    axios.get(url + "announce", config)
      .then((response) => {
        console.log('response middl', response);
        store.dispatch({
          type: 'SAVE_ANNOUNCE_LIST',
          announceList: response.data,
        });
      })
      .catch((error) => {
        console.error('error : ', error);
      });
  }
  if (action.type === 'GET_ANNOUNCE_BY_ID') {
    alert('GET_ANNOUNCE_BY_ID')
  }
  next(action); // dans tous les cas je laisse passer l'action
};

export default announceApi;