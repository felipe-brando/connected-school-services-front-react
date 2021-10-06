import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import FlashMessage from '../FlashMessage/FlashMessage';

import './style.scss';


const TeacherHomeWorks = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const flashMessageContent = useSelector((state) => state.announce.flashMessageContent);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    return (
        <section className="teacherHomeworks">
             {flashMessageContent && <FlashMessage incomingMessage={flashMessageContent} />}

            <h1>{teacherDiscipline}</h1>
            <h2>Devoirs & Annonces de Classes</h2>
            <NavLink activeClassName="teacherHomeworks_link--selected" to="/espace-perso/mes-devoirs/ajout">Ajout</NavLink>
            <NavLink activeClassName="teacherHomeworks_link--selected" to="/espace-perso/mes-devoirs/">Liste</NavLink>
            <ul>
                {teacherClassList[0].map((classroom) => {
                    return (
                        <li key={classroom.id}>
                            <NavLink
                                activeClassName="teacherHomeworks_link--selected"
                                to={"/espace-perso/mes-devoirs/liste/" + classroom.id}
                            >{classroom.grade}ème {classroom.letter.toUpperCase()}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}

export default TeacherHomeWorks;

