import { NavLink, Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import schoolPicture from '../../assets/img/school-small.jpeg'
import PropTypes from 'prop-types'

const AnnounceCard = ({ id, title, content, image, categories, date }) => {
    const dispatch = useDispatch();

    const handleModifyAnnounce = (e) => {
        const annouceId = parseInt(e.target.dataset.id);
        if (e.target.classList[1] === 'modify') {
        } else if (e.target.classList[1] === 'delete') {
            if (window.confirm('Êtes vous sur de vouloir supprimer cet annonce ?')) {
                dispatch({
                    type: 'DELETE_ANNOUNCE_BY_ID',
                    id: annouceId,
                })
            }
        }
    }

    return (
        <article className="announce">

            <img src={image[0] === 'h' ? image : schoolPicture} className="announce--img" alt="" />
            <p className="announce__tag">
                {categories.map((categoryObject) =>
                    <Link
                        key={categoryObject.id}
                        to={"/annonces/categories/" + categoryObject.id}>{categoryObject.name}.
                </Link>)}
            </p>
            <h3 className="announce__title">{title}</h3>
            <div className="announce__footer">
                <span className="announce__footer__date">{date}</span>
                <NavLink to={"/annonces/" + id} className="announce__footer__link">Voir l'annonce</NavLink>
                <Link to={"/annonces/maj/" + id} data-id={id} className="announceCard__button--modify modify">Modifier</Link>
                <button onClick={handleModifyAnnounce} data-id={id} className="announceCard__button--delete delete">Supprimer</button>
            </div>

        </article>
    );
};

AnnounceCard.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    date: PropTypes.string.isRequired,
};

export default AnnounceCard;