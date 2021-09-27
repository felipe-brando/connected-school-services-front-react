const MarksTable = ({ tableDataTab, userClassroomId, userClassroomName }) => {
    //let variable to set the student current Marks by discipline
    let currentMarks = "";
    //variable to map result 
    //filter schedule of the classroom from all the schedule data
    const classroomSchedule = tableDataTab.filter((timeSlot) => { return timeSlot.classroom.id === userClassroomId });
    
    return (
        
    )
};

export default MarksTable;