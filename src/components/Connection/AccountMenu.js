// == Import
import { useSelector } from 'react-redux';

import { User } from 'react-feather';

// == Composants
const AccountMenu = ( { handleLogout } ) => {
    const firstname = useSelector((state) => state.user.firstname);

    return (
    <li className="connection__item">
        <button className="connection__button">
        <span className="connection__icon"><User /></span>
        <span className="connection__text">{firstname}</span>
        </button>
        <div className="connection__dropdown">
            <a href="#">Accueil espace perso</a>
            <a href="#">Paramètres du compte</a>
            <a href="#" onClick={handleLogout}>Déconnexion</a>
        </div>
    </li>

    )
}

export default AccountMenu;
