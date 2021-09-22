// == Import
import { User } from 'react-feather';
import { Link } from "react-router-dom";
// == Composants
const AccountMenu = ( { handleLogout } ) => {

    return (
    <li className="connection__item">
        <Link to="#" className="connection__item-link">
        <div className="connection__icon"><User /></div>
        <div className="connection__text">Nom du user</div>
        </Link>
        <div className="connection__dropdown">
            <a href="#">Accueil espace perso</a>
            <a href="#">Paramètres du compte</a>
            <a href="#" onClick={handleLogout}>Déconnexion</a>
        </div>
    </li>

    )
}

export default AccountMenu;
