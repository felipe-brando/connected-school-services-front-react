// == Import
import { NavLink } from "react-router-dom";

import './style.scss';
import schoolPicture from '../../assets/img/school-small.jpeg';
import Connection from '../Connection';
// == Composant
const Header = () => (
  <header className="header">
    <nav className="menu">
      <img className="menu__logo" src ={schoolPicture} alt="Logo"/>
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
            to="/actualites" 
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
