import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom'

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
    }, [])

    return (

        <form className="addAnnounce__form">

            <label htmlFor="title">Titre : </label>
            <input placeholder="titre de l'annonce" required value={currentAnnounce.title} type="text" name="title" id="title" />

            <label htmlFor="content">Contenu </label>
            <textarea placeholder="texte de l'annonce" required  value={currentAnnounce.content} name="content" id="content" />

            <select >
            <option value="">Choisir une catégorie</option>
                {categoryList.map((categoryObject) => (
                    <option key={categoryObject.id} value='test'>{categoryObject.name}</option>
                )
                )}

            </select>

            <img src={currentAnnounce.image} alt="annonce" />

            {/* <label htmlFor="file">Choisir une image</label>
            <input required type="file" name="img" id="img" accept="image/png, image/jpeg" /> */}

            <input type="submit" />

        </form>
    )
}

export default ModifyAnnouce;