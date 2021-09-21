import { combineReducers } from 'redux';

import userReducer from './user';
import announceReducer from './classroom';
import classroomReducer from './announce';
import lessonReducer from './lesson';


const rootReducer = combineReducers({
  user: userReducer,
  classroom: classroomReducer,
  announce: announceReducer,
  lesson: lessonReducer,
});

export default rootReducer;