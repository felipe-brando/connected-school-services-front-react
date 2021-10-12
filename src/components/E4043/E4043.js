import './style.scss';

const { Link } = require("react-router-dom");


const E4043 = ({header}) => {
    if(header === 403){
        return (
            <div className="4043">
                <h1 className="4043__Title">Vous n'avez pas les droits nécessaire pour accéder à ce contenu</h1>
                <Link className="4043__link" to="/" >Retour à l'accueil</Link>
            </div>
        );
    } else if (header === 404) {
       return ( 
    <div className="error404">
        <p className="error404__title">202 + 202 =</p>
        <h1 className="error404__title">404</h1>
        <Link className="error__link" to="/" >Retour à l'accueil</Link>
    </div>
    );
    }
}

export default E4043;