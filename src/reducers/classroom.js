const initialState = {
  userList: [],
  grade: 'Sixième',
  letter: 'A',
  teacherClassroomList: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'SAVE_TEACHER_CLASSROOMS_LIST':
      return {
        ...state,
        teacherClassroomList: action.classroomList,
      }


    default:
      return state;
  }
};

export default reducer;