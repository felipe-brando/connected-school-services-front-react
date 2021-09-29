import { NavLink, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import { imgUrl } from '../../selectors/baseUrl';

import schoolPicture from '../../assets/img/school-small.jpeg'


const AnnounceCard = ({ id, title, content, image, categories, date, userRole }) => {
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
            <p className="announce__tag atag">
                {categories.map((categoryObject) =>
                    <Link
                        key={categoryObject.id}
                        to={"/annonces/categories/" + categoryObject.id}>{categoryObject.name}.
                </Link>)}
            </p>

            <NavLink to={"/annonces/" + id} className="announce__image--link">
                <img src={image[0] === '' ? schoolPicture : imgUrl + image} className="announce--img" alt="" />
            </NavLink>

            <h3 className="announce__title">{title}</h3>
            <div className="announce__footer">

                {userRole[0] === "ROLE_ADMIN" &&
                    <>
                        <Link
                            to={"/annonces/maj/" + id}
                            className="announceCard__button--modify modify"
                        >Modifier
                </Link>
                        <button
                            onClick={handleModifyAnnounce}
                            className="announceCard__button--delete delete"
                        >Supprimer
                </button>
                    </>}

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