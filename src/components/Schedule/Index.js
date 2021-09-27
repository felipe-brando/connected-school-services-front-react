import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import ScheduleTable from './ScheduleTable';
import DaySchedule from './DaySchedule';

function Schedule() {
    const currentSchedule = useSelector((state => state.schedule.schedule));
    const userClassroomId = useSelector((state) => state.user.classroomId);
    const userClassroomName = useSelector((state) => state.user.classroom);
    const userRole = useSelector((state) => state.user.roles);
    const dispatch = useDispatch();

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

                        <ScheduleTable
                            tableDataTab={currentSchedule}
                            userClassroomId={userClassroomId}
                            userClassroomName={userClassroomName}
                        />
                    </section>
            }
            {/* Composant planning du jour placé ici provisoirement (pour recevoir les données) sera dépacé dans l'accueil de l'espace perso, css à faire */}
            <h3>emploi du temps du jour - emplacement provisoire</h3>
            <DaySchedule tableDataTab={currentSchedule} userClassroomId={userClassroomId}/>
        </div>
    );
}

export default Schedule;