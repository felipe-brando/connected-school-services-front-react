// == Import
import { NavLink } from "react-router-dom";

import './style.scss';
import schoolPicture from '../../assets/img/school-small.jpeg'
// == Composant
const Header = () => (
  <header className="header">
    <img className="logo" src ={schoolPicture} alt="Logo"/>
    <nav className="menu">
      <NavLink to="#" className="menu__item">Accueil</NavLink>
      <NavLink to="#" className="menu__item">A propos</NavLink>
      <NavLink to="#" className="menu__item">Actualités</NavLink>
      <NavLink to="#" className="menu__item">Contact</NavLink>
    </nav>
  </header>

);

export default Header;
