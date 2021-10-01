import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HomeworksList = () => {
    const { id } = useParams();

    const announceListByClassId = useSelector((state) => state.announce.classroomAnnounces);
    const teacherDiscipline = useSelector((state) => state.user.discipline);
    const dispatch = useDispatch();


    //Collect class announces 
    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_LIST_BY_CLASS_ID',
            id: id,
        })
    }, [id])

    return (
        <div className="homeworks">

            {announceListByClassId.map((announceObject) => {

                if (announceObject.title.includes(teacherDiscipline)) {
                    return (

                        <article key={announceObject.id} className="homework__article">
                            <p className="homework__article__expiration">
                                A faire pour le <span className="homework__article__date">
                                    {announceObject.expireAt ? announceObject.expireAt : "prochain cours"}
                                </span>
                            </p>
                            <p className="homework__article__content">{announceObject.homework}</p>
                        </article>
                    )
                }
                return true
            }
            )}
        </div>
    );
}

export default HomeworksList;