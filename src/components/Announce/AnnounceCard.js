import { NavLink, Link } from 'react-router-dom';
import schoolPicture from '../../assets/img/school-small.jpeg'
import PropTypes from 'prop-types'
import AnnouncePage from './AnnouncePage';

const AnnounceCard = ({id, title, content, image, categories, date}) => {
    return (
        <article className="announce">

            <img src={schoolPicture} className="announce--img" alt="" />
            <p className="announce__tag">{categories.map((categoryName) => <Link key={categoryName} to={"/category/"+categoryName}>{categoryName}</Link>)}</p>
            <h3 className="announce__title">{title}</h3>
            <p className="announce__content">{content}</p>

            <div className="announce__footer">
                <span className="announce__footer__date">{date}</span>
                <NavLink to={"announce/"+id} className="announce__footer__link">Voir l'annonce</NavLink>
            </div>

        </article>
    );
};

AnnouncePage.propTypes= {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    date: PropTypes.string.isRequired,
};

export default AnnounceCard;