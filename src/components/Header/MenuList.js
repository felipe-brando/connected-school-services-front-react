// == Import
import { NavLink } from "react-router-dom";

// == Composant
const MenuList = () => {

    return (
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
   
    );
  };

  // == Export
  export default MenuList;