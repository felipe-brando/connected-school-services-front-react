import { NavLink } from "react-router-dom";

import './style.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <NavLink to="#" className="footer__link">Contact</NavLink>
            <NavLink to="#" className="footer__link">Mentions Légales</NavLink>
        </footer>
    )
}

export default Footer;