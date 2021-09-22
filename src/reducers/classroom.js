export const initialState = {
    userList: [],
    grade: 'Sixième',
    letter: 'A',
  };
  
  const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default reducer;