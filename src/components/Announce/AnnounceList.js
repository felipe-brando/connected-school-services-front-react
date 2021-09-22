import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import AnnounceCard from './AnnounceCard';

import './style.scss';

const AnnounceList = () => {
    const announceList = useSelector((state) => state.announce.announceList);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('UseEffect affichage list des annonces');
        dispatch({
            type: 'GET_ANNOUNCE_LIST',
        });

    },[]);
    
    return (
        <section className="announceList">
            {announceList.map ((announceObject) => (
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