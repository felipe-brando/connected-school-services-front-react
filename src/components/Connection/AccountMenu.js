// == Import
import { User } from 'react-feather';
import { Link } from "react-router-dom";
// == Composants
const AccountMenu = () => {
    return (
    <li className="connection__item">
        <Link to="#" className="connection__item-link">
        <div className="connection__icon"><User /></div>
        <div className="connection__text">Nom du user</div>
        </Link>
        <div class="connection__dropdown">
            <a href="#">Accueil espace perso</a>
            <a href="#">Paramètres du compte</a>
            <a href="#">Déconnexion</a>
        </div>
    </li>

    )
}

export default AccountMenu;
