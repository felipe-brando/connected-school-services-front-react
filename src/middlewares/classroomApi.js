import axios from 'axios';
import { apiUrl } from '../selectors/baseUrl';

const classroomApi = (store) => (next) => (action) => {

    const state = store.getState(); // access to store then state
    const token = state.user.token;

    const url = apiUrl;

    const config = {
        headers: {
            Authorization: "Bearer " + token,
        }
    }

    if (action.type === 'GET_TEACHER_CLASSROOMS_LIST') {
        axios.get(url + "classroom/sortedbyteacher/"+action.id, config)
            .then((response) => {
                store.dispatch({
                    type: 'SAVE_TEACHER_CLASSROOMS_LIST',
                    classroomList: response.data,
                });
            })
            .catch((error) => {
                console.error('GET_TEACHER_CLASSROOMS_LIST error : ', error);
            });

    }

    if (action.type === 'GET_STUDENTS_LIST_BY_CLASS_ID') {
        console.log('zction', action);
        axios.get(url + "classroom/"+action.id, config)
            .then((response) => {
                console.log(response.data)
                store.dispatch({
                    type: 'SAVE_STUDENTS_LIST',
                    studentList: response.data,
                });
            })
            .catch((error) => {
                console.error('GET_STUDENTS_LIST_BY_CLASS_ID error : ', error);
            });

    }
    
    next(action); // dans tous les cas je laisse passer l'action
};

export default classroomApi;