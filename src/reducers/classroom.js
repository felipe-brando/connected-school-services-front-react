const initialState = {
  userList: [],
  grade: 'Sixième',
  letter: 'A',
  teacherClassroomList: [],
  currentStudentList: []
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case 'SAVE_TEACHER_CLASSROOMS_LIST':
      return {
        ...state,
        teacherClassroomList: action.classroomList,
      }

      case 'SAVE_STUDENTS_LIST' :
        return {
          ...state,
          currentStudentList: action.studentList
        }

    default:
      return state;
  }
};

export default reducer;