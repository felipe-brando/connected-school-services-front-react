import AnnounceCard from './AnnounceCard';

import './style.scss';


const AnnounceList = () => {
    return (
        <section className="announceList">
            <AnnounceCard />
            <AnnounceCard />
            <AnnounceCard />
            <AnnounceCard />
        </section>
    );
};

export default AnnounceList;