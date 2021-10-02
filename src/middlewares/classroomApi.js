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
        axios.get(url + "teacher/classroom/" + action.id, config)
            .then((response) => {
                store.dispatch({
                    type: 'SAVE_TEACHER_CLASSROOMS_LIST',
                    classroomList: response.data[0].classroom,
                });
            })
            .catch((error) => {
                console.error('GET_TEACHER_CLASSROOMS_LIST error : ', error);
            });

    }

    if (action.type === 'GET_STUDENTS_LIST_BY_CLASS_ID') {
        axios.get(url + "classroom/sortedbyuser/" + action.id, config)
            .then((response) => {
                store.dispatch({
                    type: 'SAVE_STUDENTS_LIST',
                    studentList: response.data[0].users,
                });
            })
            .catch((error) => {
                console.error('GET_STUDENTS_LIST_BY_CLASS_ID error : ', error);
            });

    }

    if (action.type === 'SEND_HOMEWORKS') {
        const datazzz =  {
            "title": state.user.discipline,
            "homework": state.textEditor.editorContent,
            "category": [7],
            "expireAt": state.classroom.addHomeworksSelectedDate,
            "classrooms": state.classroom.addHomeworksSelectedClassroom,
        }
console.log(datazzz);

        axios({
            method: 'POST',
            url: url + "announce/",
            data: {
                "title": state.user.discipline,
                "homework": state.textEditor.editorContent,
                "category": [7],
                "expireAt": state.classroom.addHomeworksSelectedDate,
                "classrooms": state.classroom.addHomeworksSelectedClassroom,
            },
            headers: {
                Authorization: "Bearer " + token,
            }

        }).then((response) => {
            // store.dispatch({
            //     type: 'ADD_ANNOUNCE_RESET_INITIAL_STATE',
            // })
            // //TODO - flash message if response is ok, delete input value (and go back to previous page ?)
            // console.log(response);
            // console.log('flash message envoi annonce');

            //if announce is submit

        })

    }





    next(action); // dans tous les cas je laisse passer l'action
};

export default classroomApi;