import './style.scss';

const MarksTable = ({ measureDataArray, marksDataArray }) => {
    
     let currentAverage = "";
  

    console.log(measureDataArray);
    
    return (
        <table className = "table__content">
            <thead>
                <tr>
                    <th>Matières</th>
                    <th>Notes</th>
                    <th>Moyenne</th>
                </tr>
            </thead>
            <tbody>
                
                {measureDataArray.map((measureObject) => {
                   if (measureObject.name !== "Pause Déjeuner")                    
                     {
                        return (<tr>
                            <td className ="table__content--measure">{measureObject.name}</td>
                
                        {marksDataArray.map((markObject) => {
                            if(markObject.discipline.name === measureObject.name){
                            return ( <td  className ="table__content--marks">{markObject.grade}</td>)
                            } return true;
                        })  
                        }
                        <td className = "table__content--average"> </td> 
                        </tr>);}                    
                })                
                }
              
            </tbody>
        </table>
        
    )
};

export default MarksTable;