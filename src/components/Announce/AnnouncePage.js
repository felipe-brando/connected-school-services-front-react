import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { imgUrl } from '../../selectors/baseUrl'

import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouncePage = () => {
    //collect announce id in url with router hook
    const { id } = useParams();   

    const userRole = useSelector((state) => state.user.roles);
    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);

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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_BY_ID',
            id: id,
        });

    }, []);

    useEffect(() => {
        //could use dompurify to filter content to securise innerHTML
        const announceContent = document.querySelector('.announce__content');
        announceContent.innerHTML = currentAnnounce.content;
    }, [currentAnnounce])

    return (
        <section className="announcePage">
            <p className="announcePage__tag atag">
                {currentAnnounce.category.map((categoryObject) =>
                    <Link
                        key={categoryObject.id}
                        to={"/annonces/categories/" + categoryObject.id}>{categoryObject.name}.
                </Link>)}
            </p>
            <img
                src={currentAnnounce.image[0] === '' ? schoolPicture : imgUrl + currentAnnounce.image}
                alt=""
                className="announcePage__img"
            />
            <h1 className="announcePage__title">{currentAnnounce.title}</h1>
            <p className="announce__content" >{currentAnnounce.content} </p>
            <span className="announcePage__date">{currentAnnounce.date}</span>

            {userRole[0]==='ROLE_ADMIN' && <>
                <Link
                    to={"/annonces/maj/" + currentAnnounce.id}
                    data-id={currentAnnounce.id}
                    className="announcePage__button--modify modify"
                >Modifier
                    </Link>
                <button
                    onClick={handleModifyAnnounce}
                    data-id={currentAnnounce.id}
                    className="announcePage__button--delete delete"
                >Supprimer
             </button>
            </>}

        </section>
    );
};

export default AnnouncePage;