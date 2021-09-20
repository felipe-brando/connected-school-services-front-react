// == Import
import { NavLink } from "react-router-dom";
import schoolPicture from '../../assets/img/school-small.jpeg'
// == Composant
const Header = () => (
  <header>
    <img src ={schoolPicture} alt="Logo"/>
    <nav className="menu">
      <NavLink to="#" className="menu__item">Accueil</NavLink>
      <NavLink to="#" className="menu__item">A propos</NavLink>
      <NavLink to="#" className="menu__item">Actualités</NavLink>
      <NavLink to="#" className="menu__item">Contact</NavLink>
    </nav>
  </header>

);

export default Header;
