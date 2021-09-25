import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import AnnounceCard from './AnnounceCard';

import './style.scss';

const AnnounceList = ({ filter }) => {
    //collect announce id in url with router hook
    const { id } = useParams();

    // let variable to splice array to obtain 3 announces at home page
    let announceList = useSelector((state) => state.announce.announceList);
    const logged = useSelector((state) => state.user.logged);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_LIST',
            filter: filter,
            categoryId: id,
        });
    }, [id]);

    //Display 3 announces if homepage
    if (filter === "home") {
        announceList.splice(3);
    }
    //if filter by category but not connected
    if(filter==='categories' && !logged){
        return (
            <section>
            <h3>Vous devez être connecté pour accéder aux annonces par catégories.</h3>
            <Link to="/annonces">Retour aux annonces de l'établissement</Link>
            </section>
        )
    }

    return (
        <>
            <div>
                <Link to="/annonces/ajout">Ajouter une Annonce</Link>
                <Link to="/annonces/categories">Modifier les categories</Link>
                <h3>{filter}</h3>
            </div>
            <section className="announceList">

                {announceList.map((announceObject) => (
                    <AnnounceCard
                        key={announceObject.id}
                        id={parseInt(announceObject.id, 10)}
                        title={announceObject.title}
                        content={announceObject.content}
                        image={announceObject.image}
                        categories={announceObject.category}
                        date={announceObject.createdAt}
                    />)
                )}
            </section>
        </>
    );
};

export default AnnounceList;