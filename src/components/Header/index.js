// == Import
import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";

import About from '../About';

import './style.scss';
import schoolPicture from '../../assets/img/school-small.jpeg'
// == Composant
const Header = () => (
  <header className="header">
    <img className="logo" src ={schoolPicture} alt="Logo"/>
    <nav className="menu">
      <NavLink to="/" className="menu__item">Accueil</NavLink>
      <NavLink to="/a-propos" className="menu__item">A propos</NavLink>
      <NavLink to="/actualites" className="menu__item">Actualités</NavLink>
      <NavLink to="/contact" className="menu__item">Contact</NavLink>
    </nav>
  </header>
);

export default Header;
