import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const TeacherHomeWorks = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const userRole = useSelector((state) => state.user.roles);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);

    const dispatch = useDispatch();

    console.log(teacherDiscipline);



    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    return (
        <main className="teacherHomeWorks">
        <h1 className="teacherHomeWorks__title">
            {teacherDiscipline}            
        </h1>
        <NavLink to="/espace-perso/mes-devoirs/ajout" className="teacherHomeWorks--menuLink">Ajouter un devoir / une annonce</NavLink>  

        <p>Recevoir les annonces et filtrer par classe categorie devoir et matière (dans title ?)</p>      
        </main>
    )
}

export default TeacherHomeWorks;

