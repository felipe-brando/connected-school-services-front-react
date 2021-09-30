// == Import
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import Form from './Form';
import ResourcesList from './ResourcesList';

const Lessons = () => {
    const dispatch = useDispatch();
    const disciplines = useSelector((state) => state.lesson.disciplinesList);
    const resources = useSelector((state) => state.lesson.resourcesList);
    const currentDiscipline = useSelector((state) => state.lesson.currentDiscipline);
    const classroom = useSelector((state) => state.user.classroomGrade);
    const accordionIsOpen = useSelector((state) => state.lesson.accordionOpen);
    //console.log(classroom);
    

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

    const handleTitleClick = () => {
        dispatch({
            type: 'ACCORDION_OPEN',
        });
    }

    return (
        <div className="lessons">
            <h1 className="lessons__title">Mes ressources</h1>
            <Form disciplines={disciplines} handleChangeDiscipline={handleSelectChange} />
            <section className="resources">
            <h2 className="resources__title">Liste des ressources</h2>
            {resources.filter((resource) => resource.discipline.name === currentDiscipline && resource.title.includes(classroom)).map((filtredResource) => (
                <ResourcesList accordionIsOpen={accordionIsOpen} handleTitleClick={handleTitleClick} key={filtredResource.id} {...filtredResource} />
            ))}
            </section>
        </div>
    );
}

export default Lessons;