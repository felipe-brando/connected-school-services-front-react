import './style.scss';

const MarksTable = ({ marksDataArray }) => {
    // //let variable to set the student current Marks by discipline
    // let currentMarks = "";
    // //variable to map result 
    // const userMarks = marksDataArray.filter((marksSlot) => { return marksSlot.user.grade === userGrade});
    
    return (
        <table className = "table__content">
            <thead>
                <tr>
                    <th>Matières</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className ="table__content--measure">Mathématiques</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Mathématiques"){
                           return ( <td  className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td  className ="table__content--measure">Français</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Français"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">Histoire/Géographie</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Histoire-Géo"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">SVT</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "SVT"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">Sciences Physiques</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Mathématiques"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">LV1</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Langue Vivante 1"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">Technologie</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "Technologie"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
                <tr>
                    <td className ="table__content--measure">EPS</td>
                    {marksDataArray.map((markObject) => {
                        if(markObject.discipline.name === "EPS"){
                           return ( <td className ="table__content--marks">{markObject.grade}</td>)
                        } return true;
                    })}
                </tr>
               
            </tbody>
        </table>
        
    )
};

export default MarksTable;