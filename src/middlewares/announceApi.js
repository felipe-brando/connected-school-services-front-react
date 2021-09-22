import axios from 'axios';

const announceApi = (store) => (next) => (action) => {

  const state = store.getState(); // access to store then state

  //config provisoire
  const url = 'http://adrien-dubois.vpnuser.lan/CSS/css-back/public/api/v1/';

  // const token = "";
  // const config = {
  //   headers: {
  //     Authorization: "Bearer " + token,
  //   }
  // }

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
  if (action.type === 'SUBMIT_ANNOUNCE') {

    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2MzIzMzE3OTIsImV4cCI6MTYzMjQxODE5Miwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJ1c2VybmFtZSI6ImFkbWluQGNzcy5pbyJ9.mGWueOz2TWkUQEnGgtB2gJcU_eus-lVpXDcuHb6E7iYo1oU3Gkdp0yv8_nIEer_uv1M0cMNySsHljxLO0oyQ3vjrSNk0_GfVLPpi_n_jnk04-rz-6_UdrqF96i_bBNwnXZv-SWhNqYXrWOKtCyY6WDIKA7lyD0o8eB2BDw19N-YlAjX7Z_NJdskpWKsxv6i794UKEN6cwbmZUg2S_CPN4uhyrN9UbE9o8Y-w5aBa76cPZ7TTft_w_BE5lp85zPffNWv3Mxy56Zs2NtpvH5A_dymDioZMwnl9OAbFfYUs59lxN0H8y01OfjbK2Qdil_O6KKvos8rcVr5NaqZQ4mvAnA";
    
    axios({
      method: 'POST',
      url: url + "announce/",
      data: {
        "title": "autre titre test",
        "content": "autre contenu test",
        "image": "http:www.lyc-galois-beaumont.ac-versailles.fr/local/cache-vignettes/L469xH660/affiche-5-6de9f.jpg?1559247611",
        "category": []
      },
      headers: {
        Authorization: "Bearer " + token,
      }
    })
  }
  next(action); // dans tous les cas je laisse passer l'action
};

export default announceApi;

