const MarksTable = ({ marksDataArray }) => {
    // //let variable to set the student current Marks by discipline
    // let currentMarks = "";
    // //variable to map result 
    // const userMarks = marksDataArray.filter((marksSlot) => { return marksSlot.user.grade === userGrade});
    
    return (
        <table>
            <thead>
                <tr>
                    <th colspan="2">Note par matière</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Matières</td>
                </tr>
                <tr>
                    <td>Mathématiques</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Mathématiques"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>Français</td>
                </tr>
                <tr>
                    <td>Histoire/Géographie</td>
                </tr>
                <tr>
                    <td>SVT</td>
                </tr>
                <tr>
                    <td>Sciences Physiques</td>
                </tr>
                <tr>
                    <td>LV1</td>
                </tr>
                <tr>
                    <td>LV2</td>
                </tr>
                <tr>
                    <td>EPS</td>
                </tr>
               
            </tbody>
        </table>
        
    )
};

export default MarksTable;