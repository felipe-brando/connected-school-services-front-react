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
    roles: [],
    classroomId: '',
    classroom: '',
    classroomGrade: '',
    discipline: 'Mathématiques',
    loginOpen: false,
    burgerOpen: false,
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
          firstname: action.firstname,
          loginOpen: false,
          token: action.token,
          roles: action.roles,
          email: '',
          password: '',
          classroomId: action.classroomId,
          classroom: action.classroomName,
          classroomGrade: action.classroomGrade,
        };

      case 'TOGGLE_OPEN':
      return {
        ...state,
        loginOpen: !state.loginOpen,
      };

      case 'BURGER_TOGGLE_OPEN':
        return {
          ...state,
          burgerOpen: !state.burgerOpen,
        };

      case 'MOBILE_MENU_CLOSE':
        return {
          ...state,
          burgerOpen: false,
        };

      default:
        return state;
    }
  };
  
  export default reducer;

