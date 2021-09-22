import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
    } else if (filter === "categories") {
        const filteredAnnounceList = announceList.filter((announceObject) => { 
            return announceObject.category[0].id === parseInt(id);            

        });
        announceList = [...filteredAnnounceList];
    }
    return (
        <section className="announceList">
            {announceList.map((announceObject) => (
                <AnnounceCard
                    key={announceObject.id}
                    id={announceObject.id}
                    title={announceObject.title}
                    content={announceObject.content}
                    image={announceObject.image}
                    categories={announceObject.category}
                    date={announceObject.createdAt}
                />)
            )}
        </section>
    );
};

export default AnnounceList;