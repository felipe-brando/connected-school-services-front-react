import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ScheduleTable from './ScheduleTable';

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

        </div>
    );
}

export default Schedule;