import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Route, Switch, Link } from "react-router-dom";

import ClassroomStudents from "./ClassroomStudents";

import './style.scss';

const Classroom = () => {

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
        <section className="teacherClassroom">
            <h1>Mes Classes - cours de {teacherDiscipline}</h1>
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
        </section>
    )
}

export default Classroom;