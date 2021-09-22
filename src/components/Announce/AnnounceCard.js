import { NavLink, Link } from 'react-router-dom';
import schoolPicture from '../../assets/img/school-small.jpeg'
import PropTypes from 'prop-types'

const AnnounceCard = ({ id, title, content, image, categories, date }) => {
    return (
        <article className="announce">

            <img src={image[0]==='h'?image:schoolPicture} className="announce--img" alt="" />
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