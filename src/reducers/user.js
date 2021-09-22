export const initialState = {
    logged: false,
    firstname: 'Jhon',
    lastename: 'Toto',
    image: '',
    email: '',
    adress: '10 rue de truc',
    zip_code: '75000',
    city: 'Paris',
    phone: '06000000',
    password: '',
    token: '',
    roles: 'élève',
    classroom: 'Troisième A',
    discipline: 'Mathématiques',
    loginOpen: false,
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'CHANGE_VALUE':
      return {
        ...state,
        [action.key]: action.newValue, 
      };
      case 'LOGIN':
        return {
          ...state,
          loginOpen: false,
          logged: true,
          email: '',
          password: '',
      };
      case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };
      default:
        return state;
    }
  };
  
  export default reducer;

