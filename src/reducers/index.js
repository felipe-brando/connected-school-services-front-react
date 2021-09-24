import { combineReducers } from 'redux';

import userReducer from './user';
import classroomReducer from './classroom';
import announceReducer from './announce';
import lessonReducer from './lesson';
import scheduleReducer from './schedule'

const rootReducer = combineReducers({
  user: userReducer,
  classroom: classroomReducer,
  announce: announceReducer,
  lesson: lessonReducer,
  schedule: scheduleReducer,
});

export default rootReducer;