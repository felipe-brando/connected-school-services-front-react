// == Import
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import { PlusCircle } from 'react-feather';

import Form from './Form';
import ResourcesList from './ResourcesList';
import AddResources from "./AddResources";

const Lessons = () => {
    const dispatch = useDispatch();
    const disciplines = useSelector((state) => state.lesson.disciplinesList);
    const resources = useSelector((state) => state.lesson.resourcesList);
    const currentDiscipline = useSelector((state) => state.lesson.currentDiscipline);
    const classroom = useSelector((state) => state.user.classroomGrade);
    const isSelected = useSelector((state) => state.lesson.selected);
    const isTextEditorOpen = useSelector((state) => state.lesson.textEditorOpen);
    const roleTeacher = useSelector((state) => state.user.roles.includes('ROLE_TEACHER'));
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const teacherDisciplineId = useSelector((state) => state.user.disciplineId);

    const filtred = resources.filter((resource) => resource.discipline.name === teacherDiscipline && resource.title.includes(classroom));
    const map = filtred.map(filtredResource => filtredResource.content); 


    useEffect(() => {
        dispatch({
            type: 'FETCH_DISCIPLINES',
        });
    }, []);

    useEffect(() => {
        dispatch({
            type: 'FETCH_RESOURCES',
            
        });
    }, []);

    const handleSelectChange = (e) => {
        dispatch({
            type: 'CHANGE_SELECT_DISCIPLINE',
            value: e.target.value,
        });
    }

    const toggle = (e) => {
            dispatch ({
                type: 'ACCORDION_OPEN',
                index: parseInt(e.currentTarget.id),
            })
            if (isSelected ===  parseInt(e.currentTarget.id)){
                dispatch ({
                    type: 'ACCORDION_CLOSE',
                })
            }
    }

    const handleResourceAdd = () => {
        dispatch ({
            type: 'OPEN_RESOURCES_TEXT_EDITOR'
        })
    }
    
    return (
        <div className="lessons">
            <h1 className="lessons__title">Mes ressources</h1>
            {roleTeacher ? <p>Votre matière : {teacherDiscipline}</p> :  <Form disciplines={disciplines} handleChangeDiscipline={handleSelectChange} />}
            <section className="resources">
            <h2 className="resources__title">Liste des ressources</h2>
            {roleTeacher && <button type="submit" onClick={handleResourceAdd}><PlusCircle /></button>}
            {isTextEditorOpen && <AddResources teacherDisciplineId={teacherDisciplineId} />}
            {roleTeacher ? resources.filter((resource) => resource.discipline.name === teacherDiscipline && resource.title.includes(classroom)).map((filtredResource, i) => (
                <ResourcesList roleTeacher={roleTeacher} isSelected={isSelected} index={i} handleTitleClick={toggle} key={filtredResource.id} {...filtredResource} />
            )) 
            : 
            resources.filter((resource) => resource.discipline.name === currentDiscipline && resource.title.includes(classroom)).map((filtredResource, i) => (
                <ResourcesList roleTeacher={roleTeacher} isSelected={isSelected} index={i} handleTitleClick={toggle} key={filtredResource.id} {...filtredResource} />
            )) }
            </section>
        </div>
    );
}

export default Lessons;