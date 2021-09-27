const DaySchedule = ({ tableDataTab, userClassroomId }) => {
    //let variable to set the timeslot discipline
    let currentDiscipline = "";
    //filter schedule of the classroom from all the schedule data
    const classroomSchedule = tableDataTab.filter((timeSlot) => { return timeSlot.classroom.id === userClassroomId });
    //get today day
    const date = new Date();
    const toDayNumber = date.getDay();
    const dayName = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'vendredi', 'Samedi'];
    //variable to map result 
    const scheduleTimeSlot = ['08h00', '09h00', '10h00', '11h00', '12h00', '13h00', '14h00', '15h00', '16h00'];
    const dayNumber = [toDayNumber];

    if (toDayNumber === 0 || toDayNumber === 6) {
        return (<h1>C'est le week-end, on travaille un peu et on se repose beaucoup 😎.</h1>)
    } else {
        return (
            <table>
                <thead>
                    <tr>
                        <th colspan="6">Emploi du temps du jour</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Horaires</td>
                        <td>{dayName[toDayNumber]}</td>

                    </tr>
                    {
                        scheduleTimeSlot.map((timeslot) => {
                            return (
                                <>
                                    <tr>
                                        <td>{timeslot}</td>
                                    </tr>
                                    <tr>
                                        <td>|</td>
                                        {dayNumber.map((dayInt) => {
                                            let mapResult = false;

                                            classroomSchedule.map((timeslotData) => {
                                                if (timeslotData.day.id === dayInt && timeslotData.begin === timeslot) {
                                                    currentDiscipline = timeslotData.discipline.name
                                                    mapResult = true;
                                                }
                                                return false;
                                            })
                                            if (mapResult) { return (<td>{currentDiscipline}</td>) } else { return (<td> - </td>) }
                                        })}
                                    </tr>
                                </>
                            )
                        })}

                </tbody>
            </table>
        )
    }
};

export default DaySchedule;