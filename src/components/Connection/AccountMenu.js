// == Import
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";

import { User } from 'react-feather';
import { Settings } from 'react-feather';
import { Unlock } from 'react-feather';

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
            <Link to="#">
                <span className="connection__icon">
                    <User />
                </span>
                <span className="connection__text">
                    Accueil espace perso
                </span>
            </Link>
            <Link to="#">
                <span className="connection__icon">
                    <Settings />
                </span>
                <span className="connection__text">
                    Paramètres
                </span>
            </Link>
            <button className="deconnection" onClick={handleLogout}>
                <span className="connection__icon">
                    <Unlock />
                </span>
                <span className="connection__text">
                    Déconnexion
                </span>
            </button>
        </div>
    </li>
    )
}

export default AccountMenu;
