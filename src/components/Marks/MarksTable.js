const MarksTable = ({ marksDataArray }) => {
    // //let variable to set the student current Marks by discipline
    // let currentMarks = "";
    // //variable to map result 
    // const userMarks = marksDataArray.filter((marksSlot) => { return marksSlot.user.grade === userGrade});
    
    return (
        <table>
            <thead>
                <tr>
                    <th colSpan="2">Note par matière</th>
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
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Français"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>Histoire/Géographie</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Histoire-Géo"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>SVT</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "SVT"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>Sciences Physiques</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Mathématiques"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>LV1</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Langue Vivante 1"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>Technologie</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Technologie"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td>EPS</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "EPS"){
                           return ( <td>{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
               
            </tbody>
        </table>
        
    )
};

export default MarksTable;