// == Import
import { User } from 'react-feather';

import './style.scss';
// == Composant
const Connection = () => (
    <div className="connection">
      <ul className="connection__list">
        <li className="connection__item">
          <button className="connection__button" type="button" aria-label="Connexion">
            <User /> Connexion
          </button>
        </li>
      </ul>
    </div>
  );

export default Connection;
