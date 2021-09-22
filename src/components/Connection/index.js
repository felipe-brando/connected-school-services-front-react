// == Import
import { useSelector, useDispatch } from 'react-redux';

import { User } from 'react-feather';
import { Link } from "react-router-dom";

import './style.scss';
import LoginForm from './LoginForm';
import AccountMenu from './AccountMenu';
// == Composant
const Connection = () => {
  const isOpen = useSelector((state) => state.user.loginOpen);
  const logged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };

  return (
    <div className="connection">
      <ul className="connection__list">
        {logged ? 
          <AccountMenu />
          :
          <li className="connection__item"> 
            <Link onClick={handleClick} to="#" className="connection__item-link">
              <div className="connection__icon"><User /></div>
              <div className="connection__text">Connexion</div>
            </Link>
          </li> 
        }
      </ul>
      <div className={isOpen ? "login" : "login login--hidden"} >
  
      <LoginForm />
      </div>
    </div>
  );
}

export default Connection;
