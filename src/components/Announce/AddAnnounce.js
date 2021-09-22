import { useSelector, useDispatch } from "react-redux";

const AddAnnounce = () => {
    //link state
    const titleInputValue = useSelector((state) => state.announce.newAnnounceTitle);
    const contentInputValue = useSelector((state) => state.announce.newAnnounceContent);
    // const categoryInputValue = useSelector((state) => state.announce.newAnnounceCategory);
    // const imageInputValue = useSelector((state) => state.announce.newAnnounceImage);

    //Link Dispatch
    const dispatch = useDispatch();

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
            <input onChange={handleTitleChange} value={titleInputValue} type="text" name="title" id="title" />

            <label htmlFor="content">Contenu </label>
            <textarea onChange={handlecontentChange} value={contentInputValue} name="content" id="content" />

            <select onChange={handleSelectChange}>
                <option value="">Choisir une catégorie</option>
                <option value='test'>Category test</option>
            </select>

            <label htmlFor="file">Choisir une image</label>
            <input onChange={handleLoadImage} type="file" name="img" id="img" accept="image/png, image/jpeg" />

            <input type="submit" />

        </form>
    );

};

export default AddAnnounce;