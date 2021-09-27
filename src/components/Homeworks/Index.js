import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

function Homeworks() {
    const userClassroomId = useSelector((state) => state.user.classroomId);
    const announceListByClassId = useSelector((state) => state.announce.classroomAnnounces);
    const dispatch = useDispatch();

    //Collect class announces 
    useEffect(() => {
        console.log("UZEFFF HW");
        dispatch({
            type: 'GET_ANNOUNCE_LIST_BY_CLASS_ID',
            id: userClassroomId,
        })
    }, [])

    console.log(announceListByClassId);

    return (
        <div className="homeworks">
            <h1>Mes Devoirs</h1>
            {announceListByClassId.map((announceObject) => (
                <article key={announceObject.id} className="homework__article">
                    <h3 className="homework__article__title">{announceObject.title}</h3>
                    <p className="homework__article__expiration">A faire pour le
                     <span className="homework__article__date"> {announceObject.expireAt?announceObject.expireAt:"prochain cours"}</span>
                     </p>
                    <p className="homework__article__content">{announceObject.homework}</p>
                </article>
            )
            )}
        </div>
    );
}

export default Homeworks;