import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import TextEditor from '../TextEditor/TextEditor';

const AddAnnounce = () => {
    //link state
    const titleInputValue = useSelector((state) => state.announce.newAnnounceTitle);

    // const categoryInputValue = useSelector((state) => state.announce.newAnnounceCategory);
    //const imageInputValue = useSelector((state) => state.announce.newAnnounceImage);
    const categoryList = useSelector((state) => state.announce.categoryList);

    //Link Dispatch
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({
            type: 'GET_CATEGORY_LIST',
        });
    }, []);

    //handleChange functions
    const handleTitleChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_TITLE',
            value: e.target.value,
        })
    };

    const handleSelectChange = (e) => {
        dispatch({
            type: 'CHANGE_SELECT_ANNOUNCE',
            value: e.target.selectedOptions[0].dataset.id,
        })
    };
    const handleLoadImage = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_IMAGE',
            value: e.target.value,
            fileValue: e.target.files[0],
        })
    }

    //submit Form Function
    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SUBMIT_ANNOUNCE',
        })

    };

    return (
        <form className="addAnnounce__form" onSubmit={handleSubmitForm} >

            <label className="addAnnounce__form--label" htmlFor="title">Titre : </label>
            <input
                placeholder="titre de l'annonce"
                required onChange={handleTitleChange}
                value={titleInputValue}
                type="text" name="title"
                id="title"
            />


            <label className="addAnnounce__form--label" htmlFor="content">Contenu </label>
            <TextEditor />

            <select className="addAnnounce__form--select" onChange={handleSelectChange}>
                <option value="">Choisir une catégorie</option>
                {
                    categoryList.map((categoryObject) => (
                        <option key={categoryObject.id} data-id={categoryObject.id}>
                            {categoryObject.name}
                        </option>
                    )
                    )}

            </select>

            <label htmlFor="file">Choisir une image</label>
            <input
                required onChange={handleLoadImage}
                type="file"
                name="img"
                id="img"
                accept="image/png, image/jpeg"
            />

            <input type="submit" />

        </form>
    );

};

export default AddAnnounce;