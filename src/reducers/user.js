export const initialState = {
    logged: false,
    firstname: '',
    lastename: '',
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
        [action.key]: action.value, 
      };
      case 'LOGIN':
        return {
          ...state,  
      };
      case 'LOGOUT':
        return {
          ...state,
          logged: false,
          token: '',
      };
      case 'SAVE_USER':
        return {
          ...state,
          logged: true, 
          firstname: action.username,
          loginOpen: false,
          token: action.token,
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

