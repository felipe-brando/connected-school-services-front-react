import React from "react";
<<<<<<< Updated upstream
=======
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';

>>>>>>> Stashed changes

import './style.scss';

const MarksTable = ({ measureDataArray, marksDataArray }) => {

    const generalAverage= [];
<<<<<<< Updated upstream
 
=======
    const resources = useSelector((state) => state.lesson.resourcesList);
    const disciplineId = useSelector((state) => state.user.disciplineId);

    const marksArray = [];
    const [marksTitle, setMarksTitle] = useState("");
    
    const dispatch = useDispatch();

    useEffect(() => {
     
        dispatch({
            type: 'FETCH_DISCIPLINES'
        });
    }, [])
    

    function handleSubmitMarks(e) {
        e.preventDefault();
        dispatch({
            type: 'SEND_MARKS',
            marksArray: marksArray,
            marksTitle: marksTitle,
            disciplineId: disciplineId,
        })
        setMarksTitle("");
    }

    const onMouseOver = () => {
        ;
    }

>>>>>>> Stashed changes
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
                       
                        
                            <td className ="table__content--marks"><button className ="btn__showresources" type = "text" id ="label" value = {marksTitle}  onMouseOver ={resources} label ="test" aria-label ="matière à afficher">{(gradeData.join(" | "))}</button> </td>
                            
                            
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