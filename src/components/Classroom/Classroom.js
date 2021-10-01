import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch, Link } from "react-router-dom";

import ClassroomStudents from "./ClassroomStudents";

import './style.scss';

const Classroom = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const userRole = useSelector((state) => state.user.roles);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    return (
        <section className="teacherClassroom">
            {
                userRole[0] === "USER_TEACHER" ? (
                    <>
                        <h1>{teacherDiscipline}</h1>
                        <h2>Mes Classes</h2>
                        <ul>
                            {teacherClassList[0].map((classroom) => {
                                return (
                                    <li>
                                        <NavLink
                                            activeClassName="teacherClassroom_link--selected"
                                            to={"/espace-perso/mes-classes/" + classroom.id}
                                        >{classroom.grade}ème {classroom.letter.toUpperCase()}
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                        <Switch>
                            <Route path="/espace-perso/mes-classes/:id" exact>
                                <ClassroomStudents />
                            </Route>
                        </Switch>
                    </>
                ) : (
                        <>
                            <p>Vous n'avez pas les droits nécessaires pour afficher cette page.</p>
                            <p><Link to='/espace-perso'>Retour à l'accueil</Link></p>
                        </>
                    )
            }
        </section>
    )
}

export default Classroom;