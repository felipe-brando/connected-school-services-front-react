// == Import
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import Form from './Form';

const Lessons = () => {
    const dispatch = useDispatch();
    const disciplines = useSelector((state) => state.lesson.disciplinesList);

    useEffect(() => {
        dispatch({
            type: 'FETCH_DISCIPLINES',
        });
    }, []);
    return (
        <div className="lessons">
            <h1>Mes ressources</h1>
            <Form disciplines={disciplines} />
            <ul>Liste des ressources
                <li>Ressource 1</li>
                <li>Ressource 2</li>
            </ul>
        </div>
    );
}

export default Lessons;