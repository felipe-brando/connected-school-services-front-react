import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import FlashMessage from '../FlashMessage/FlashMessage';

import TextEditor from 'react-quill';

const EditResources = ({ currentContent, currentId}) => {
    const currentResource = useSelector((state) => state.lesson.currentResource);

    const [inputContentValue, setInputContentValue] = useState(currentContent);


    const dispatch = useDispatch();
    const handleTitleChange = (e) => {
        dispatch({
            type: 'MODIFY_CURRENT_RESOURCE_TITLE',
            newTitle: e.target.value,
        })
    };

    const handleContentChange = (e) => {
        setInputContentValue(e);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SUBMIT_EDITED_RESOURCE',
            id: currentId,
            content: inputContentValue,
        })
        setInputContentValue(currentContent);
    };
   
    return (
        <section>
            <form onSubmit={handleSubmitForm} data-id={currentId} className="addResource-form" >

                <label className="addResource-form__label" htmlFor="title">Titre : </label>
                <input
                    onChange={handleTitleChange}
                    className="addResource-form__input"
                    type="text" 
                    value={currentResource.title}
                    placeholder="Titre de la ressource"
                    id="title"
                   
                />

                <label className="addResource__form--label" htmlFor="content">Contenu : </label>
                <TextEditor value={inputContentValue} onChange={handleContentChange}  />
                
                <button type="submit">Envoyer</button>
            </form>
        </section>
    );

};

export default EditResources;