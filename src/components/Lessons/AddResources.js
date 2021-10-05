import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import FlashMessage from '../FlashMessage/FlashMessage';

import TextEditor from '../TextEditor/TextEditor';


const AddResources = ({ teacherDisciplineId }) => {
    //link state    
    const newTitle = useSelector((state) => state.lesson.newResourceTitle);
    const newContent = useSelector((state) => state.lesson.newResourceContent);

    const [inputContentValue, setInputContentValue] = useState('');

    //Link Dispatch
    const dispatch = useDispatch();

    //reset to "" input file value at each send
   // useEffect(() => {
  //      const inputFile = document.querySelector('.addAnnounce__form--input__file');
  //      inputFile.value = "";
  //  }, [titleInputValue]);

    //handleChange functions
    const handleTitleChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_RESOURCE_TITLE',
            newTitle: e.target.value,
        })
    };

    const handleContentChange = (e) => {
        setInputContentValue(e);
    };

    const sendNewResource = () => {
        dispatch({
            type: 'SEND_NEW_RESOURCE',
            disciplineId: teacherDisciplineId,
 
        })
    }
    
    //submit Form Function
    const handleSubmitForm = (e) => {
        e.preventDefault();
        sendNewResource();

    };

    return (
        <section>
            <form onSubmit={handleSubmitForm} className="addResource-form" >

                <label className="addResource-form__label" htmlFor="title">Titre : </label>
                <input
                    onChange={handleTitleChange}
                    className="addResource-form__input"
                    type="text" 
                    value={newTitle}
                    placeholder="Titre de la ressource"
                    id="title"
                />

                <label className="addResource__form--label" htmlFor="content">Contenu : </label>
                <TextEditor />

                <button type="submit">Envoyer</button>
            </form>
        </section>
    );

};

export default AddResources;