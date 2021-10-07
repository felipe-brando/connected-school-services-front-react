import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { roundNumber } from '../../selectors/round';

const MarksTeacherAverage = () => {
    const teacherClassList = useSelector((state) => state.classroom.teacherClassroomList);
    const teacherId = useSelector((state) => state.user.userId);
    const marksList = useSelector((state) => state.marks.marksList);
    const disciplineId = useSelector((state) => state.user.disciplineId);

    const filteredMarksList = marksList.filter((mark) => { return mark.discipline.id === disciplineId });

    const dispatch = useDispatch();

    useEffect(() => {
        //reset student list if teacher changes page and return to marks
        dispatch({
            type: "RESET_STUDENTS_LIST_STATE",
        })
        dispatch({
            type: "GET_TEACHER_CLASSROOMS_LIST",
            id: teacherId,
        });
        dispatch({
            type: "GET_MARKS_LIST",
        });
    }, []);

    //array will contain marks by class to calculate average
    let marksSum = 0;
    let marksNumber = 0

    return (
        <section className="teacherMarks">
            <h1>Moyennes de Classes</h1>
            <ul>
                {teacherClassList[0].map((classroom) => {
                    marksSum = 0;
                    marksNumber = 0
                    return (
                        <li key={classroom.id}>
                            {classroom.grade}ème {classroom.letter.toUpperCase()} -
                            {
                                filteredMarksList.map((mark) => {
                                    if (mark.user.classroom.id === classroom.id) {
                                        marksSum += parseInt(mark.grade);
                                        marksNumber++;
                                    }
                                })
                            }
                            {marksSum ? " " + roundNumber(marksSum / marksNumber) : " Aucune note"}
                        </li>)
                })}
            </ul>
        </section>
    )
}

export default MarksTeacherAverage;