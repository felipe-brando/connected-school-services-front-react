import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

const MarksTeacher = () => {
    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const studentList = useSelector((state) => state.classroom.currentStudentList);

    console.log(studentList);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    function handleChangeSelectClass(e) {
        dispatch({
            type: 'GET_STUDENTS_LIST_BY_CLASS_ID',
            id: e.target.value,
        })
    }

    return (
        <section className="teacherMarks">
            <>
                <h1>Notes</h1>
                <h2>Ajouter un ensemble de notes</h2>
                <h3>Selectionner une classe</h3>
                <select onChange={handleChangeSelectClass} className="teacherMarksClassroom_link">
                    <option value="">Selectionner une classe</option>
                    {teacherClassList[0].map((classroom) => {
                        return (
                            <option value={classroom.id}>
                                {classroom.grade}ème {classroom.letter.toUpperCase()}
                            </option>)
                    })}
                </select>
            </>
            {studentList && (
                <ul>
                    {studentList.map((student) => {
                        return (<li key={student.id}> {student.lastname} {student.firstname}<input type="text"/></li>);
                    })}
                </ul>
            )}
        </section>
    )
}

export default MarksTeacher;