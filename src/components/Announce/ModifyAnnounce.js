import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'
import TextEditor from '../TextEditor/TextEditor';
import { imgUrl } from '../../selectors/baseUrl';


const ModifyAnnouce = () => {
    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);
    const categoryList = useSelector((state) => state.announce.categoryList);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_BY_ID',
            id: id,
        });
        dispatch({
            type: 'GET_CATEGORY_LIST',
        });
    }, []);
    
    //Selecting current category after downloading categories list
    useEffect(() => {
        const formSelectOptions = document.querySelector('.addAnnounce__form--select').children;
        const formSelectOptionsArray = [...formSelectOptions];
        formSelectOptionsArray.map((option) => {            
            //set all options to false
            if (option.selected === true) { option.selected = false; }
            //select current announce category if exist
            if (currentAnnounce.category[0]) {
                if (currentAnnounce.category[0].id) {
                    if (parseInt(option.dataset.id, 10) === parseInt(currentAnnounce.category[0].id, 10)) {
                        option.selected = true;
                    }
                } else if (currentAnnounce.category[0]) {
                    if (parseInt(option.dataset.id, 10) === parseInt(currentAnnounce.category[0], 10)) {
                        option.selected = true;
                    }
                }
            }

            return true;
        })
    }, [categoryList, currentAnnounce.category])

    //--handleChange modifying functions--//

    const handleTitleChange = (e) => {
        dispatch({
            type: 'MODIFY_CURRENT_ANNOUNCE_TITLE',
            value: e.target.value,
        })
    };

    const handleSelectChange = (e) => {
        dispatch({
            type: 'MODIFY_CURRENT_ANNOUNCE_SELECT',
            value: {id: e.target.selectedOptions[0].dataset.id,}
        })
    };
    const handleLoadImage = (e) => {

        const files = e.target.files;
        const imgName = files[0].name
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);

        reader.onload = (e) => {
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
        console.log(e);
        e.preventDefault();
        dispatch({
            type: 'SUBMIT_MODIFIED_ANNOUNCE',
            id: id,
        })
    };


    return (

        <form onSubmit={handleSubmitForm} className="addAnnounce__form">

            <label htmlFor="title">Titre : </label>
            <input onChange={handleTitleChange} placeholder="titre de l'annonce" required value={currentAnnounce.title} type="text" name="title" id="title" />

            <label htmlFor="content">Contenu </label>
            <TextEditor />

            <select onChange={handleSelectChange} required className="addAnnounce__form--select">
                <option value="">Choisir une catégorie</option>
                {categoryList.map((categoryObject) => (
                    <option key={categoryObject.id} value={categoryObject.name} data-id={categoryObject.id}>{categoryObject.name}</option>
                )
                )}
            </select>
            {/* <label htmlFor="file">Choisir une image</label>
            <input required type="file" name="img" id="img" accept="image/png, image/jpeg" /> */}
            <img src={imgUrl + currentAnnounce.image} alt="annonce" />
            <input className="addAnnounce__form--submit" type="submit" />

        </form>
    )
}

export default ModifyAnnouce;