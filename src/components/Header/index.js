// == Import
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import './style.scss';
import logo from '../../assets/img/logo-css.png';
import Connection from '../Connection';
// == Composant
const Header = () => (
  <header className="header">
    <nav className="menu">
      <Link to="/">
        <img className="menu__logo" src ={logo} alt="Logo" />
      </Link>
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink 
            to="/" 
            className="menu__item-link" 
            exact>
            Accueil
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            to="/a-propos" 
            className="menu__item-link" 
            exact
          >
            A propos
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            to="/annonces" 
            className="menu__item-link" 
            exact
          >
            Actualités
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            to="/contact" 
            className="menu__item-link" 
            exact
          >
            Contact
          </NavLink></li>
      </ul>
      <Connection />
    </nav>
  </header>
);
// == Export
export default Header;
