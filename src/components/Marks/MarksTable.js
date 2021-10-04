import React from "react";

import './style.scss';

const MarksTable = ({ measureDataArray, marksDataArray }) => {

    const generalAverage= [];
 
    return (
        <table className = "table__content">
            <thead>
                <tr className = "table__content--column">
                    <th>Matières</th>
                    <th>Notes</th>
                    <th>Moyenne</th>
                </tr>
            </thead>
            <tbody>
                
                {measureDataArray.map((measureObject) => {

                   const gradeData = [];
                  
                   if (measureObject.name !== "Pause Déjeuner")                    
                     {
                        return (<tr>              
                            <td className ="table__content--measure">{measureObject.name}</td>
                            {marksDataArray.map((markObject) => {
                                if(markObject.discipline.name === measureObject.name){
                                    
                                    gradeData.push(parseInt(markObject.grade,10));
                                    generalAverage.push(parseInt(markObject.grade,10));
                            
                              } return true;
                            })  
                        }
                            <td className ="table__content--marks">{(gradeData.join(" | "))}</td>
                            
                            <td className = "table__content--average">{parseInt(gradeData.reduce((a,b) => a+b, 0))/gradeData.length}</td> 
                        </tr>);}   
                    
                       return  ( <tr className ="table__content--average--generalaverage">Votre moyenne générale : {Math.round(parseInt(generalAverage.reduce((a,b) => a+b, 0)*100)/generalAverage.length)/100}                      
                       </tr>       
                       )                  
                })                
                }
              
            </tbody>
        </table>
        
    )
};

export default MarksTable;