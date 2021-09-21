// == Import
import { User } from 'react-feather';
import { Link } from "react-router-dom";

import './style.scss';
// == Composant
const Connection = () => (
    <div className="connection">
      <ul className="connection__list">
        <li> 
          <Link to="#" className="connection__item">
            <div className="connection__icon"><User /></div>
            <div className="connection__text">Connexion</div>
          </Link>
        </li> 
      </ul>
    </div>
  );

export default Connection;
