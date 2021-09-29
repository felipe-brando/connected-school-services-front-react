import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useState } from 'react';

import TextEditor from '../TextEditor/TextEditor';

const AddAnnounce = () => {
    //link state
    const titleInputValue = useSelector((state) => state.announce.newAnnounceTitle);
    const categoryList = useSelector((state) => state.announce.categoryList);
    //local state only to display selected image preview
    const [imgUrl, setImgUrl] = useState("");

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
        console.dir(e.target);

        const files = e.target.files;
        const imgName = files[0].name
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
            //tests
            setImgUrl(e.target.result);

            //console.log('event', e.target.result.replace("data:", "").replace(/^.+,/, ""))
            dispatch({
                type: 'CHANGE_INPUT_IMAGE',
                value: e.target.value,
                fileValue: e.target.result,
                imgName: imgName
            })
        }

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

            <select required className="addAnnounce__form--select" onChange={handleSelectChange}>
                <option value="">Choisir une catégorie</option>
                {
                    categoryList.map((categoryObject) => (
                        <option value={categoryObject.id} key={categoryObject.id} data-id={categoryObject.id}>
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
            {imgUrl && <img src={imgUrl} alt="preview" />}

            <input type="submit" />

        </form>
    );

};

export default AddAnnounce;