import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Switch, Route, Link } from "react-router-dom";
import HomeworksList from './HomeworkList';

import './style.scss';


const TeacherHomeWorks = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const userRole = useSelector((state) => state.user.roles);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    return (        
        <section className="teacherHomeworks">
            <h1>Mes Devoirs - cours de {teacherDiscipline}</h1>
            <NavLink activeClassName="teacherHomeworks_link--selected" to="/espace-perso/mes-devoirs/ajout">Ajout</NavLink> 
            <NavLink activeClassName="teacherHomeworks_link--selected" to="/espace-perso/mes-devoirs/">Liste</NavLink>           
            <ul>
                {teacherClassList.map((classroom) => {
                    return (
                        <li>
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

