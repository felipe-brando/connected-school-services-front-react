import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import FlashMessage from '../FlashMessage/FlashMessage';

import TextEditor from 'react-quill';

const EditResources = () => {
   
   
    return (
        <section>
            <form className="addResource-form" >

                <label className="addResource-form__label" htmlFor="title">Titre : </label>
                <input
                    className="addResource-form__input"
                    type="text" 
                    value='test'
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

export default EditResources;