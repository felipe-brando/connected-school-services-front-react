import './style.scss';

const MarksTable = ({ measureDataArray, marksDataArray }) => {
    
        // const currentAverage = (total, currentValue) =>  total + currentValue;
        // const sum = arr.reduce(currentAverage)

        // return sum / arr.length


        // const currentAverage = sum markObject.grade / markObject.grade.length

        const generalAverage= [];

       
    
    // marksDataArray => marksDataArray.reduce((a, b) => a + b, 0) / marksDataArray.grade.length;
    
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
                    const gradeData= [];
                    
                   if (measureObject.name !== "Pause Déjeuner")                    
                     {
                        return (<tr>
                            <td className ="table__content--measure">{measureObject.name}</td>
                
                        {marksDataArray.map((markObject) => {
                            if(markObject.discipline.name === measureObject.name){
                                gradeData.push(parseInt(markObject.grade,10));
                                generalAverage.push(parseInt(markObject.grade,10));
                            return ( <td  className ="table__content--marks">{markObject.grade}</td>)
                            
                            } return true;
                        })  
                        }
                        <td className = "table__content--average">{parseInt(gradeData.reduce((a,b) => a+b, 0))/gradeData.length}</td> 
                        </tr>);}   
                    
                       return  ( <tr className ="table__content--generalaverage">{Math.round(parseInt(generalAverage.reduce((a,b) => a+b, 0)*100)/generalAverage.length)/100}
                       
                       </tr>       

                       )                  
                })                
                }
              
            </tbody>
        </table>
        
    )
};

export default MarksTable;