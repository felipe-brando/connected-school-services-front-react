<<<<<<< HEAD
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';


=======
import ContactPage from '../../../../../../../../../var/www/html/Apothéose/projet-connected-school-services-front/src/components/News';
>>>>>>> feature/inte
import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouncePage = () => {
    //collect announce id in url with router hook
    const { id } = useParams();

    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);

    useEffect(() => {
        console.log('chargement des infos');
    })

    return (
        <section className="announcePage">
            <img src={schoolPicture} alt="" className="announce__img" />
            <p className="announcePage__tag">
                {currentAnnounce.categories.map((categoryName) =>
                    <Link
                        key={categoryName}
                        to={"/annonces/categories/" + categoryName}>{categoryName}.
                </Link>)}
            </p>
            <h1 className="announcePage__title">{currentAnnounce.title}</h1>
            <span className="announcePage__date">{currentAnnounce.date}</span>
            <p className="announcePage__content"> Contenu de l'annonce avec l'id : {id}
            </p>
        </section>
    );
};

export default AnnouncePage;