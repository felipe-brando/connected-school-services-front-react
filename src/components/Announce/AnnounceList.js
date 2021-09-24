import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import AnnounceCard from './AnnounceCard';

import './style.scss';

const AnnounceList = ({ filter }) => {
    //collect announce id in url with router hook
    const { id } = useParams();

    let announceList = useSelector((state) => state.announce.announceList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'GET_ANNOUNCE_LIST',
        });
    }, []);

    //Display 3 announces if homepage
    if (filter === "home") {
        announceList.splice(3);
    }

    //display announce by category
    else if (filter === "categories") {
        // const filteredAnnounceList = announceList.filter((announceObject) => {
        //     //return announceObject.category[0].id === parseInt(id);
        //     console.log(announceObject.category[0].id)
        //     //return announceObject.category === parseInt(id);

        // });
        // announceList = [...filteredAnnounceList];
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