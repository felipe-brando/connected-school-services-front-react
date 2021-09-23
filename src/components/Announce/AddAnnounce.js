import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

const AddAnnounce = () => {
    //link state
    const titleInputValue = useSelector((state) => state.announce.newAnnounceTitle);
    const contentInputValue = useSelector((state) => state.announce.newAnnounceContent);
    // const categoryInputValue = useSelector((state) => state.announce.newAnnounceCategory);
    const imageInputValue = useSelector((state) => state.announce.newAnnounceImage);
    const categoryList = useSelector((state) => state.announce.categoryList);

    //Link Dispatch
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch({
            type: 'GET_CATEGORY_LIST',
        });
    },[]);

    //handleChange functions
    const handleTitleChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_TITLE',
            value: e.target.value,
        })
    };

    const handlecontentChange = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_CONTENT',
            value: e.target.value,
        })
    };

    const handleSelectChange = (e) => {
        dispatch({
            type: 'CHANGE_SELECT_OPTION',
            value: e.target.selectedOptions[0].label,
        })
    };
    const handleLoadImage = (e) => {
        dispatch({
            type: 'CHANGE_INPUT_IMAGE',
            value: e.target.value,
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
        <form onSubmit={handleSubmitForm} className="addAnnounce__form">

            <label htmlFor="title">Titre : </label>
            <input placeholder="titre de l'annonce" required onChange={handleTitleChange} value={titleInputValue} type="text" name="title" id="title" />

            <label htmlFor="content">Contenu </label>
            <textarea placeholder="texte de l'annonce" required onChange={handlecontentChange} value={contentInputValue} name="content" id="content" />

            <select onChange={handleSelectChange}>
                <option value="">Choisir une catégorie</option>
                {categoryList.map((categoryObject) => (
                    <option key={categoryObject.id} value='test'>{categoryObject.name}</option>
                )
                )}

            </select>

            <label htmlFor="file">Choisir une image</label>
            <input required onChange={handleLoadImage} type="file" name="img" id="img" accept="image/png, image/jpeg" />

            <input type="submit" />

        </form>
    );

};

export default AddAnnounce;