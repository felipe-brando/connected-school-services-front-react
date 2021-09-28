import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import AnnounceCard from './AnnounceCard';

import './style.scss';

const AnnounceList = ({ filter }) => {
    //collect announce id in url with router hook
    const { id } = useParams();

    // let variable to splice array to limit to 3 announces displayed at home page
    let announceList = useSelector((state) => state.announce.announceList);
    const logged = useSelector((state) => state.user.logged);
    const userRole = useSelector((state) => state.user.roles);
    console.log(userRole);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_LIST',
            filter: filter,
            categoryId: id,
        });
    }, [id]);

    // Separate announces and homeworks
    const filteredAnnounceList = announceList.filter((announceObject) => {
        if (announceObject.category[0]) {
            return announceObject.category[0].id !== 7;
        }
        return true;
    });


    // Display 3 announces if homepage
    if (filter === "home") {
        filteredAnnounceList.splice(3);
    }
    //if try to filter announces by category but user is not connected
    if (filter === 'categories' && !logged) {
        return (
            <section>
                <h3>Vous devez être connecté pour accéder aux annonces par catégories.</h3>
                <Link to="/annonces">Retour aux annonces de l'établissement</Link>
            </section>
        )
    }

    return (
        <>  {
            userRole[0] === "ROLE_ADMIN" &&
            <div>
                <Link to="/annonces/ajout">Ajouter une Annonce</Link>
                <Link to="/annonces/categories">Modifier les categories</Link>
                <h3>{filter}</h3>
            </div>
        }
            <section className="announceList">

                {filteredAnnounceList.map((announceObject) => (
                    <AnnounceCard
                        key={announceObject.id}
                        id={parseInt(announceObject.id, 10)}
                        title={announceObject.title}
                        content={announceObject.content}
                        image={announceObject.image}
                        categories={announceObject.category}
                        date={announceObject.createdAt}
                        userRole={userRole}
                    />)
                )}
            </section>
        </>
    );
};

export default AnnounceList;