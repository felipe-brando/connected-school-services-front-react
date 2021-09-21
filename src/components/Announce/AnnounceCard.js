import { NavLink } from 'react-router-dom';
import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouceCard = () => {
    return (
        <article className="announce">

            <img src={schoolPicture} className="announce--img" alt="" />
            <p className="announce__tag">categorie(s?)</p>
            <h3 className="announce__title">Titre de l'annonce</h3>
            <p className="announce__content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla perferendis assumenda atque, veniam voluptatem eveniet maxime velit voluptas iure cum tempora ut odio suscipit similique explicabo corporis voluptates, aliquid eaque!
            </p>

            <div className="announce__footer">
                <span className="announce__footer__date">Date de l'annonce</span>
                <NavLink to="#" className="announce__footer__link">Voir l'annonce</NavLink>
            </div>

        </article>
    );
};

export default AnnouceCard