import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import TextEditor from '../TextEditor/TextEditor';
import FlashMessage from '../FlashMessage/FlashMessage';

import './style.scss';

const AddHomeworks = () => {

    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const flashMessageContent = useSelector((state) => state.announce.flashMessageContent);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(({
            type: "CLEAN_EDITOR_CONTENT",
        }));
    }, []);

    useEffect(() => {
        dispatch(({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        }));
    }, []);

    //-----handle functions-----//
    function handleChangeSelectClass(e) {
        dispatch({
            type: 'CHANGE_ADD_HOMEWORKS_SELECT_CLASSROOM',
            id: e.target.selectedOptions[0].value,
        })
    }
    function handleChangeSelectCategory(e) {
        dispatch({
            type: 'CHANGE_ADD_HOMEWORKS_SELECT_CATEGORY',
            value: e.target.selectedOptions[0].value,
        })
    }
    function handleChangeSelectDate(e) {
        const today = Date.now();
        if (e.target.valueAsNumber < today) {
            console.log('La date ne peut pas être antérieure à la date du jour');
            e.target.valueAsNumber = today;
        }

        dispatch({
            type: 'CHANGE_ADD_HOMEWORKS_SELECT_DATE',
            value: e.target.value
        })
    }
    function handleSubmitHomeworks(e) {
        e.preventDefault();
        dispatch({
            type: 'SEND_HOMEWORKS',
        })

    }

    return (
        <>
            {flashMessageContent && <FlashMessage incomingMessage={flashMessageContent} />}
            <nav className="AddHomeworks__nav">
                <h1>{teacherDiscipline}</h1>
                <NavLink
                    activeClassName="teacherHomeworks_link--selected"
                    to="/espace-perso/mes-devoirs/ajout"
                >Ajout
                </NavLink>
                <NavLink
                    activeClassName="teacherHomeworks_link--selected"
                    to="/espace-perso/mes-devoirs"
                    exact
                    className="teacherHomeWorks--menuLink"
                >                    Liste
                </NavLink>
            </nav>
            <form className="addHomeworks__form" onSubmit={handleSubmitHomeworks} >

                <select
                    className="addHomeworks__form select--category"
                    required
                    onChange={handleChangeSelectCategory}
                >
                    <option value={"Devoirs"}>Devoirs</option>
                    <option value={"Annonces"}>Annonces</option>
                </select>


                <select
                    required
                    className="addHomework__form select--class"
                    onChange={handleChangeSelectClass}
                >
                    <option value="">Selectionner une classe</option>
                    {
                        teacherClassList[0].map((classRoomObject) => (
                            <option value={classRoomObject.id} key={classRoomObject.id}>
                                {classRoomObject.grade + "ème " + classRoomObject.letter.toUpperCase()}
                            </option>
                        ))}
                </select>

                <input
                    type="date"
                    className="addHomework__form select--date"
                    onChange={handleChangeSelectDate}
                />

                <TextEditor />
                {/* modifier les options du text editor enlever image etc */}

                <input
                    className="addHomework__form--submit"
                    type="submit"
                />

            </form>
        </>
    );

}

export default AddHomeworks;