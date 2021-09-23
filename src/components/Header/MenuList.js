// == Import
import { NavLink } from "react-router-dom";

// == Composant
const MenuList = ({closeMobileMenu}) => {

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
            to="/actualites" 
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
      </ul> 
   
    );
  };

  // == Export
  export default MenuList;