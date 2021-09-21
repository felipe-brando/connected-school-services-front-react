export const initialState = {
    logged: false,
    firstname: 'Jhon',
    lastename: 'Toto',
    image: '',
    email: 'jhon@toto.com',
    adress: '10 rue de truc',
    zip_code: '75000',
    city: 'Paris',
    phone: '06000000',
    password: 'toto',
    token: '',
    roles: 'élève',
    classroom: 'Troisième A',
    discipline: 'Mathématiques',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;

  
