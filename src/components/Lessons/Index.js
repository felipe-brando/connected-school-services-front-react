// == Import
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import Form from './Form';
import ResourcesList from './ResourcesList';

const Lessons = () => {
    const dispatch = useDispatch();
    const disciplines = useSelector((state) => state.lesson.disciplinesList);
    const resources = useSelector((state) => state.lesson.resourcesList);

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

    return (
        <div className="lessons">
            <h1 className="lessons__title">Mes ressources</h1>
            <Form disciplines={disciplines} />
            <section className="resources">
            <h2 className="resources__title">Liste des ressources</h2>
            {resources.map((resource) => (
                <ResourcesList key={resource.id} {...resource} />

            ))}
            </section>
        </div>
    );
}

export default Lessons;