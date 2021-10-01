// == Import
import { useSelector } from 'react-redux';
import { User } from 'react-feather';

import './style.scss';


// == Composant
const Welcome = () => {
    const firstname = useSelector((state) => state.user.firstname);
    const lastname = useSelector((state) => state.user.lastname);
    const classroom = useSelector((state) => state.user.classroom); 
  
  return (
    <div className="welcome">
        <div className="welcome__image"><User /></div>
        <p className="welcome__name">Bonjour <br/> {firstname} {lastname} !</p>
        <p className="welcome__classroom">Ta classe: {classroom}</p>
    </div>
  );
}

export default Welcome;
