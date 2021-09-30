import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClassroomStudent = () => {
    const studentList = useSelector((state) => state.classroom.currentStudentList);
    const { id } = useParams();
    const dispatch = useDispatch();

    console.log(studentList);

    useEffect(() => {
        console.log('UZEFF');
        dispatch({
            type: 'GET_STUDENTS_LIST_BY_CLASS_ID',
            id: id,
        })
    },[id]);

    return (
        <ul>En attente API user par classe
            {/* {studentList.map((student) => {
                return (
                    <li hey={student.id}>{student.firstname} {student.lastname} </li>
                )
            })} */}
        </ul>
    );
}

export default ClassroomStudent;