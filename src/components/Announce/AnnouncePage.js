import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { imgUrl } from '../../selectors/baseUrl'
import TextEditor from 'react-quill';
import Spinner from '../Spinner/Spinner'
import { Edit, Trash } from 'react-feather';

import schoolPicture from '../../assets/img/school-small.jpeg'

const AnnouncePage = () => {
    //collect announce id in url with router hook
    const { id } = useParams();

    const userRole = useSelector((state) => state.user.roles);
    const currentAnnounce = useSelector((state) => state.announce.currentAnnounce);
    const isLoading = useSelector((state) => state.announce.isLoading);

    const handleClickDeleteAnnounce = (e) => {
        dispatch({
            type: "TOGGLE_MODAL",
        })
        dispatch({
            type: "MODIFY_ANNOUNCE_ID_TO_DELETE",
            id: id,
        })
    }

    const handleModifyAnnounce = (e) => {
        const annouceId = parseInt(e.target.dalPictureet.id);
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

    // useEffect(() => {
    //     //could use dompurify to filter content to securise innerHTML
    //     const announceContent = document.querySelector('.announce__content');
    //     announceContent.innerHTML = currentAnnounce.content;
    // }, [currentAnnounce])

    if (isLoading) {
        return (
            <section className="announcePage">
                <Spinner />
            </section>
        )
    } else {

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
                    src={
                        currentAnnounce.image &&
                            currentAnnounce.image[0] === '' ? schoolPicture : imgUrl + currentAnnounce.image
                    }
                    alt=""
                    className="announcePage__img"
                />
                <h1 className="announcePage__title">{currentAnnounce.title}</h1>
                {/*
            TextContent is now displayed with TextEditor
             <p className="announce__content" >{currentAnnounce.content} </p>
             */}

                <TextEditor
                    value={currentAnnounce.content}
                    readOnly={true}
                    theme={"bubble"}
                />

                <span className="announcePage__date">{currentAnnounce.date}</span>

                {userRole[0] === "ROLE_ADMIN" &&
                    <div className="announcePage_icon__container">
                        <Link to={"/annonces/maj/" + id}>
                            <button className="announcePage__icon edit">
                            <Edit /> <span className='announcePage__icon--edit'> Editer  </span>
                            </button>
                        </Link>

                        <button onClick={handleClickDeleteAnnounce} className="announcePage__icon delete">
                            <span className='announcePage__icon--delete'>  Supprimer </span><Trash />
                        </button>
                    </div>}
            </section>
        );
    }
};

export default AnnouncePage;