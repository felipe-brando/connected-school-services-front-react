import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Schedule() {
    const currentSchedule = useSelector((state => state.schedule.schedule));
    const userClassroomId = useSelector((state) => state.user.classroomId);
    const userClassroomName = useSelector((state) => state.user.classroom);
    const userRole = useSelector((state) => state.user.roles);
    const dispatch = useDispatch();

    console.log(currentSchedule);
    console.log(userRole);

    useEffect(() => {
        dispatch({
            type: 'GET_CURRENT_SCHEDULE',
        });
    }, [])

    return (
        <div className="Schedule">
            {currentSchedule === [] ?
                <h1>Problème de connexion</h1> :
                userRole[0] === "ROLE_ADMIN" ?
                    <h1> ADMIN </h1> :
                    <section className="schedule">
                        <h1>Emploi du temps : {userClassroomName}</h1>
                        {
                            currentSchedule.map((scheduleEntry) => {
                                if (scheduleEntry.classroom.id === userClassroomId) {
                                    return (
                                        <li>
                                            <p>{scheduleEntry.day.name}</p>
                                            <p>{scheduleEntry.begin} / {scheduleEntry.finish}</p>
                                            <p>{scheduleEntry.discipline.name}</p>
                                        </li>)
                                }
                                return true;
                            })}
                    </section>
            }
        </div>
    );
}

export default Schedule;