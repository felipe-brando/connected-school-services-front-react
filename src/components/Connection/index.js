// == Import
import { User } from 'react-feather';

import './style.scss';
// == Composant
const Connection = () => (
    <div className="connection">
      <ul className="connection__list">
        <li className="connection__item">
        <User />
        Connexion
        </li>
      </ul>
    </div>
  );

export default Connection;
