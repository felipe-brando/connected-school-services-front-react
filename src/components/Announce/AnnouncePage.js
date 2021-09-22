import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouncePage = () => {
    //collect announce id in url with router hook
    const { id } = useParams();

    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_BY_ID',
            id: id,
        });

    }, []);

    return (
        <section className="announcePage">
            <img src={currentAnnounce.image[0] === 'h' ? currentAnnounce.image : schoolPicture} alt="" className="announce__img" />
            <p className="announcePage__tag">
                {currentAnnounce.category.map((categoryObject) =>
                    <Link
                        key={categoryObject.id}
                        to={"/annonces/categories/" + categoryObject.id}>{categoryObject.name}.
                </Link>)}
            </p>
            <h1 className="announcePage__title">{currentAnnounce.title}</h1>
            <p className="announce__content">{currentAnnounce.content}</p>
            <span className="announcePage__date">{currentAnnounce.date}</span>
        </section>
    );
};

export default AnnouncePage;