import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import TextEditor from 'react-quill';

const HomeworkEdit = () => {

    const currentHomework = useSelector((state) => state.announce.currentHomework);
    const { homeworkId } = useParams();
    const dispatch = useDispatch();
    const [homeworkContent, setHomeworkContent] = useState("");

    console.log(currentHomework);


    useEffect(() => {
        dispatch({
            type: 'GET_HOMEWORK_BY_ID',
            id: homeworkId,
        })
    }, [homeworkId])

    function handleChangeContent(e) {
        setHomeworkContent(e);
    }

    function handleSubmitHomework(e) {
        e.preventDefault();
        dispatch({
            type: 'EDIT_HOMEWORK',
            content: homeworkContent,
            id: homeworkId,
        })
    }

    return (
        <>
            <form onSubmit={handleSubmitHomework}>
                <TextEditor defaultValue={currentHomework.homework} onChange={handleChangeContent} />
                <input type="submit" value="Enregistrer" />
            </form>
        </>
    )

}

export default HomeworkEdit;