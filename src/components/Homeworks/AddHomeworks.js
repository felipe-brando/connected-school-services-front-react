import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import TextEditor from '../TextEditor/TextEditor';

const AddHomeworks = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const userRole = useSelector((state) => state.user.roles);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);

    const dispatch = useDispatch();

    console.log(teacherClassList);



    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);



    return (
        <>
            <nav className="AddHomeworks__nav">
                <h1>{teacherDiscipline}</h1>
                <NavLink to="/espace-perso/mes-devoirs" className="teacherHomeWorks--menuLink">Liste des annonces / devoirs </NavLink>
            </nav>
            <form className="addHomeworks__form"  >

                <select
                    required
                    className="addAnnounce__form--select"
                >
                    <option value="">Selectionner une classe</option>
                    {
                        teacherClassList.map((classRoomObject) => (
                            <option value={classRoomObject.id} key={classRoomObject.id}>
                                {classRoomObject.grade + "ème " + classRoomObject.letter.toUpperCase()}
                            </option>
                        ))}
                </select>

                <label className="addAnnounce__form--label" htmlFor="content">Contenu </label>
                <TextEditor />
                {/* modifier les options du text editor enlever image etc */}

                <input type="submit" />

            </form>
        </>
    );

}

export default AddHomeworks;