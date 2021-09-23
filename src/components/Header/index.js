// == Import
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { Menu } from 'react-feather';


import './style.scss';
import logo from '../../assets/img/logo-css.png';
import Connection from '../Connection';
import MenuList from './MenuList';
// == Composant
const Header = () => {
  const burgerIsOpen = useSelector((state) => state.user.burgerOpen);
  
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: 'BURGER_TOGGLE_OPEN',
    });
  };
  
  return (
    <header className="header">
      <nav className="menu">
        <Link to="/">
          <img className="menu__logo" src ={logo} alt="Logo" />
        </Link>
        <button className="burger-menu" onClick={handleClick}>
          <Menu />
        </button>

        <div className={burgerIsOpen ? "menuList" : "menuList menuList--hidden"} >
        <MenuList />
        </div>

        <MenuList />
        <Connection />
      </nav>
    </header>
  );
}
// == Export
export default Header;
