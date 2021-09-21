import { useSelector } from 'react-redux'

import AnnounceCard from './AnnounceCard';

import './style.scss';


const AnnounceList = () => {
    const AnnounceList = useSelector((state) => state.announce.announceList);

    return (
        <section className="announceList">
            {AnnounceList.map ((announceObject) => (
            <AnnounceCard
            key={announceObject.id}
            id={announceObject.id}
            title={announceObject.title}
            content={announceObject.content}
            image={announceObject.image}
            categories={announceObject.categories}
            date={announceObject.date}
            />)
            )}
        </section>
    );
};

export default AnnounceList;