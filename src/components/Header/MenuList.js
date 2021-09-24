// == Import
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// == Composant
const MenuList = ({closeMobileMenu}) => {
  const logged = useSelector((state) => state.user.logged);
    return (
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink 
            onClick={closeMobileMenu}
            to="/" 
            className="menu__item-link" 
            exact>
            Accueil
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            onClick={closeMobileMenu}
            to="/a-propos" 
            className="menu__item-link" 
            exact
          >
            A propos
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            onClick={closeMobileMenu} 
            to="/annonces" 
            className="menu__item-link" 
            exact
          >
            Actualités
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink
            onClick={closeMobileMenu} 
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
   
    );
  };

  // == Export
  export default MenuList;