import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouncePage = (props) => {
    //CurrentAnnounce with id = props.match.params.id extract from the location
    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);

    return (
        <section className="announcePage">
            <img src={schoolPicture} alt="" className="announce__img" />
            <p className="announcePage__tag">{currentAnnounce.categories.map((categoryName) => <Link key={categoryName} to={"/category/"+categoryName}>{categoryName}</Link>)}</p>
            <h1 className="announcePage__title">{currentAnnounce.title}</h1>
            <span className="announcePage__date">{currentAnnounce.date}</span>
            <p className="announcePage__content"> Cotnenu de l'annonce avec l'id : {props.match.params.id}
        </p>
        </section>
    );
};

AnnouncePage.propTypes={
    props: PropTypes.object.isRequired,
}

export default AnnouncePage;