// == Import
import { useDispatch } from 'react-redux';
import Input from './Input';

// == Composant
const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
          type: 'LOGIN',
        });
      };

    return (
      <form onSubmit={handleSubmit} className="connection__form">
        <Input
          placeholder="Email"
          aria-label="Email"
          className="connection__input"
          type="email"
          inputKey="email"
        />
        <Input
          placeholder="Mot de passe"
          aria-label="Mot de passe"
          className="connection__input"
          type="password"
          title="Veuillez saisir le bon mot de passe"
          inputKey="password"
        />
        <button className="connection__btn" type="submit">Se connecter</button>
      </form>
    );
  };
  
  export default LoginForm;