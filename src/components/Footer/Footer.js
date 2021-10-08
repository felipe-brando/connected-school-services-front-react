import { NavLink } from "react-router-dom";

import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <NavLink to="/contact" className="footer__link" exact>Contact</NavLink>
            <NavLink to="/mentions-legales" className="footer__link" exact>Mentions Légales</NavLink>
            <NavLink to="/equipe" className="footer__link" exact>Équipe CSS</NavLink>          
        </footer>
    )
}

export default Footer;