import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import FlashMessage from '../FlashMessage/FlashMessage';

import TextEditor from '../TextEditor/TextEditor';

const AddResources = ({ teacherDisciplineId }) => {
    //link state    
    const titleInputValue = useSelector((state) => state.lesson.newResourceTitle);
    const flashMessageContent = useSelector((state) => state.lesson.flashMessageContent);
  


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
            type: 'CHANGE_INPUT_RESOURCE__TITLE',
            value: e.target.value,
        })
    };

    //submit Form Function
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SUBMIT_NEW_RESOURCE',
            disciplineId: teacherDisciplineId,
        })

    };

    return (
        <section>
            {flashMessageContent && <FlashMessage incomingMessage={flashMessageContent} />}

            <form className="addResource__form" onSubmit={handleSubmitForm} >

                <label className="addResource__form--label" htmlFor="title">Titre : </label>
                <input
                    placeholder="Titre de la ressource"
                    required onChange={handleTitleChange}
                    value={titleInputValue}
                    type="text" name="title"
                    id="title"
                />

                <label className="addResource__form--label" htmlFor="content">Contenu : </label>
                <TextEditor />

                <button type="submit" onClick={handleSubmitForm}>Envoyer</button>
            </form>
        </section>
    );

};

export default AddResources;