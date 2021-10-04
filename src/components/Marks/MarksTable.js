import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


import './style.scss';

const MarksTable = ({ measureDataArray, marksDataArray }) => {

    const generalAverage= [];
    const resources = useSelector((state) => state.lesson.resourcesList);

    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch({
            type: 'FETCH_DISCIPLINES'
        });
    }, [])
    

    const onMouseOver = () => {
        ;
    }

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
                       
                        
                            <td className ="table__content--marks"><button className ="btn__showresources" onMouseOver ={resources} label ="affiche ce que je veux" aria-label ="matière à afficher">{(gradeData.join(" | "))}</button> </td>
                            
                            
                            <td className = "table__content--average"><button>{parseInt(gradeData.reduce((a,b) => a+b, 0))/gradeData.length}</button>moyenne</td> 
                             
                        

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