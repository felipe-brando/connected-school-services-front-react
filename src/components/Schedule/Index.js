import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ScheduleTable from './ScheduleTable';

import './style.scss';

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
        <div className="schedule">
            <h1 className="schedule__title">Emploi du temps :<br/>{userClassroomName}</h1>
            {currentSchedule === [] ?
                <h1>Problème de connexion</h1> :
                userRole[0] === "ROLE_ADMIN" ?
                    <h1> ADMIN </h1> :
                    <section className="schedule__overflow">

                        <ScheduleTable
                            tableDataTab={currentSchedule}
                            userClassroomId={userClassroomId}
                            userClassroomName={userClassroomName}
                        />
                    </section>
            }

        </div>
    );
}

export default Schedule;