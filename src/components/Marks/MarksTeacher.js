import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FlashMessage from '../FlashMessage/FlashMessage';

const MarksTeacher = () => {
    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const studentList = useSelector((state) => state.classroom.currentStudentList);
    const disciplineId = useSelector((state) => state.user.disciplineId);
    const flashMessageContent = useSelector((state) => state.announce.flashMessageContent);
    
    const marksArray = [];
    const [marksTitle, setMarksTitle] = useState("");

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
    }

    function handleAddMarks(e) {
        marksArray[e.target.dataset.id.toString()] = {
            id: e.target.dataset.id,
            mark: e.target.value,
        }
    }

    function handleSubmitMarks(e) {
        e.preventDefault();
        dispatch({
            type: 'SEND_MARKS',
            marksArray: marksArray,
            marksTitle: marksTitle,
            disciplineId: disciplineId,
        })
        setMarksTitle("");
    }

    function handleMarksTitleChange(e) {
        setMarksTitle(e.target.value);
    }

    return (
        <section className="teacherMarks">

            {flashMessageContent && <FlashMessage incomingMessage={flashMessageContent} />}

            <form onSubmit={handleSubmitMarks}>
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

                <label htmlFor="label">Intitulé</label>
                <input type="text" id="label" value={marksTitle} placeholder="Titre de la notation" onChange={handleMarksTitleChange} />

                {studentList && (
                    <ul>
                        {studentList.map((student) => {
                            return (
                                <li key={student.id}>
                                    {student.lastname} {student.firstname}
                                    <input type="text" onChange={handleAddMarks} data-fullname={student.lastname + '-' + student.firstname} data-id={student.id} />
                                </li>);
                        })}

                    </ul>
                )}
                <input type="submit" />
            </form>
        </section>
    )
}

export default MarksTeacher;