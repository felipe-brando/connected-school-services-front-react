// == Import
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import './style.scss';
import logo from '../../assets/img/logo-css.png';
import Connection from '../Connection';

// == Composant
<<<<<<< HEAD
const Header = () => {
  const logged = useSelector((state) => state.user.logged);
  return (
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
              {logged && 
              <li><NavLink
              to="/espace-perso" exact> Espace Personnel                               
            </NavLink></li>}
        </ul>
        <Connection />
      </nav>
    </header>
)};
=======
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
>>>>>>> feature/announces2
// == Export
export default Header;
