import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function StudentHomeworks() {
    const userClassroomId = useSelector((state) => state.user.classroomId);
    const announceListByClassId = useSelector((state) => state.announce.classroomAnnounces);
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
            id: userClassroomId,
        })
    }, [])


    return (
        <div className="homeworks">
            <h1>Mes Devoirs</h1>
            {announceListByClassId.map((announceObject) => (
                <article key={announceObject.id} className="homework__article">
                    <h3 className="homework__article__title">{announceObject.title}</h3>
                    <p className="homework__article__expiration">Pour le <span className="homework__article__date">
                        {announceObject.expireAt ? dateConverter(announceObject.expireAt) : "prochain cours"}
                    </span>
                    </p>
                    <p className="homework__article__content">{announceObject.homework}</p>
                </article>
            )
            )}
        </div>
    );
}

export default StudentHomeworks;