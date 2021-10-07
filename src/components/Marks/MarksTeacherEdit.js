import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const MarksTeacherEdit = () => {
    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const studentList = useSelector((state) => state.classroom.currentStudentList);
    const marksListByClassroom = useSelector((state)=>state.marks.marksListByClassroom);
    const disciplineId = useSelector((state) => state.user.disciplineId);
        
    console.log(marksListByClassroom);
    console.log(studentList);

    const dispatch = useDispatch();

    useEffect(() => {
        //reset student list if teacher changes page and return to marks
        dispatch({
            type: "RESET_STUDENTS_LIST_STATE",
        })

        dispatch({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        });
    }, []);

    function handleChangeSelectClass(e) {
        dispatch({
            type: 'GET_STUDENTS_LIST_BY_CLASS_ID',
            id: e.target.value,
        })

        dispatch({
            type: 'GET_STUDENTS_MARKS_BY_CLASS_ID',
            id: e.target.value,
        })
    }

    return (
        <section className="teacherMarks">
            <form>
                <h1>Notes</h1>

                <nav className="marks__navlink__container">
                    <NavLink className="marks__navlink" to="/espace-perso/mes-notes" exact >Ajouter un ensemble de notes</NavLink>
                    <NavLink className="marks__navlink" to="/espace-perso/mes-notes/edition" exact>Accéder aux notes</NavLink>
                </nav>

                <select onChange={handleChangeSelectClass} className="teacherMarksClassroom_link">
                    <option value="">Selectionner une classe</option>
                    {teacherClassList[0].map((classroom) => {
                        return (
                            <option key={classroom.id} value={classroom.id}>
                                {classroom.grade}ème {classroom.letter.toUpperCase()}
                            </option>)
                    })}
                </select>

                {studentList && (
                    <ul>
                        {studentList.map((student) => {
                            return (
                                <li key={student.id}>
                                    {student.lastname}
                                    {student.firstname} : 
                                    {marksListByClassroom.map((mark)=>{
                                        return mark.user.id === student.id ? <span key={mark.id} title={mark.title}>{mark.grade}</span> : "";
                                    })}                                  
                                </li>);
                        })}

                    </ul>
                )}
            </form>
        </section>
    )
}

export default MarksTeacherEdit;