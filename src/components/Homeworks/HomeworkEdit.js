import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextEditor from '../TextEditor/TextEditor';

const HomeworkEdit = () => {

    const { homeworkId } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_HOMEWORK_BY_ID',
            id: homeworkId,
        })
    }, [homeworkId])

    function handleSubmitHomework(e) {
        e.preventDefault();
        dispatch({
            type: 'EDIT_HOMEWORK',
            id: homeworkId,
        })
    }

    return (
        <>
            <form className="homework__formEdit" onSubmit={handleSubmitHomework}>
                <TextEditor />
                <button className="homework__btnEdit" type="submit" value="Enregistrer">
                    Publier
                </button>
            </form>
        </>
    )

}

export default HomeworkEdit;