// == Import
import { User } from 'react-feather';
import { Link } from "react-router-dom";
// == Composants
const AccountMenu = () => {
    return (
    <li>
        <Link to="#" className="connection__item">
        <div className="connection__icon"><User /></div>
        <div className="connection__text">Nom du user</div>
        </Link>
        <div class="connection__dropdow">
            <a href="#">Accueil espace perso</a>
            <a href="#">Paramètres du compte</a>
            <a href="#">Déconnexion</a>
        </div>
    </li>

    )
}

export default AccountMenu;
