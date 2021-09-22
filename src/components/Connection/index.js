// == Import
import { useSelector, useDispatch } from 'react-redux';

import { User } from 'react-feather';
import { Link } from "react-router-dom";

import './style.scss';
import LoginForm from './LoginForm';
import AccountMenu from './AccountMenu';
// == Composant
const Connection = () => {
  const email = useSelector((state) => state.user.email);
  const password = useSelector((state) => state.user.password);
  const isOpen = useSelector((state) => state.user.loginOpen);
  const logged = useSelector((state) => state.user.logged);
  console.log(email);
  console.log(isOpen);

  const dispatch = useDispatch();

  const changeField = (value, key) => {
    dispatch({
      type: 'CHANGE_VALUE',
      value: value,
      key: key,
    });
  };

  const login = () => {
    dispatch({
      type: 'LOGIN',
    });
  };

  const handleClick = () => {
    dispatch({
      type: 'TOGGLE_OPEN',
    });
  };
  const logout = () => {
      dispatch({
        type: 'LOGOUT',
      });
    };

  return (
    <div className="connection">
      <ul className="connection__list">
        {logged ? 
          <AccountMenu handleLogout={logout} />
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
  
      <LoginForm         
        email={email}
        password={password}
        changeField={changeField}
        handleLogin={login}
        isLogged={logged}
        handleLogout={logout}
        />
      </div>
    </div>
  );
}

export default Connection;
