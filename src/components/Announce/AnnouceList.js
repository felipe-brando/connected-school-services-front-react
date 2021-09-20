import AnnounceCard from './AnnounceCard';

import './style.scss';


const AnnouceList = () => {
    return (
        <section className="announceList">
            <AnnounceCard />
            <AnnounceCard />
            <AnnounceCard />
            <AnnounceCard />
        </section>
    );
};

export default AnnouceList;