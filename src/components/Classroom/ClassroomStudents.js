import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const ClassroomStudent = () => {
    const studentList = useSelector((state) => state.classroom.currentStudentList);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('UZEFF');
        dispatch({
            type: 'GET_STUDENTS_LIST_BY_CLASS_ID',
            id: id,
        })
    },[id]);

    return (
        <ul>
            {studentList.map((student) => {
                return (
                    <li key={student.id}> {student.lastname} </li>
                )
            })}
        </ul>
    );
}

export default ClassroomStudent;