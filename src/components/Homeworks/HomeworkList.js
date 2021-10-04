import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TextEditor from 'react-quill';

const HomeworksList = () => {
    const { id } = useParams();

    const announceListByClassId = useSelector((state) => state.announce.classroomAnnounces);
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const dispatch = useDispatch();

    //function to convert database-numbers-date in french-words
    function dateConverter(currentDate) {
        const date = new Date(currentDate);
        const options = { weekday: "long", year: "numeric", month: "long", day: "2-digit" };
        return date.toLocaleDateString("fr-FR", options);
    }

    //Collect class announces 
    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_LIST_BY_CLASS_ID',
            id: id,
        })
    }, [id])

    return (
        <ul className="homeworks">

            {announceListByClassId.map((announceObject) => {

                if (announceObject.title.includes(teacherDiscipline)) {
                    return (

                        <li key={announceObject.id} className="homework__article">
                            <p className="homework__article__expiration">
                                - Pour le <span className="homework__article__date">
                                    {announceObject.expireAt ? dateConverter(announceObject.expireAt) : "prochain cours"}
                                </span>
                            </p>

                            {/* <p className="homework__article__content">{announceObject.homework}</p> */}

                            <TextEditor
                                value={announceObject.homework}
                                readOnly={true}
                                theme={"bubble"}
                            />


                        </li>
                    )
                }
                return true
            }
            )}
        </ul>
    );
}

export default HomeworksList;