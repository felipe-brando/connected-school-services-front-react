import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { useState } from 'react';
import FlashMessage from '../FlashMessage/FlashMessage';

import TextEditor from '../TextEditor/TextEditor';

const AddResources = () => {
    //link state    
    const titleInputValue = useSelector((state) => state.announce.newAnnounceTitle);
    const categoryList = useSelector((state) => state.announce.categoryList);
    const flashMessageContent = useSelector((state) => state.announce.flashMessageContent);
    //local state only to display selected image preview
    const [imgUrl, setImgUrl] = useState("");


    //Link Dispatch
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_CATEGORY_LIST',
        });
    }, []);

    //reset to "" input file value at each send
   // useEffect(() => {
  //      const inputFile = document.querySelector('.addAnnounce__form--input__file');
  //      inputFile.value = "";
  //  }, [titleInputValue]);

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
        // console.dir(e.target);

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

        setImgUrl("");

    };

    return (
        <section>
            {flashMessageContent && <FlashMessage incomingMessage={flashMessageContent} />}

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

                <button type="submit">Envoyer</button>

            </form>
        </section>
    );

};

export default AddResources;