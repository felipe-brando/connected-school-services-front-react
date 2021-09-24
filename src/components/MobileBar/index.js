import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";


import { Calendar, Users, Book, Server, Award } from 'react-feather';

import './style.scss';


const MobileBar = ()  => {
    const roleStudent = useSelector((state) => state.user.roles.includes('ROLE_USER'));
    const roleAdmin = useSelector((state) => state.user.roles.includes('ROLE_ADMIN'));
    const roleTeacher = useSelector((state) => state.user.roles.includes('ROLE_TEACHER'));
    return (
        <div className="mobileBar">
            <nav className='mobileBar__menu'>
                {roleStudent && // if I am a student
                <ul className='mobileBar__list'>
                    <NavLink className='mobileBar__link' to="/espace-perso/mon-emploi-du-temps" exact>
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='mobileBar__text'>Emploi <br/> du temps</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="/espace-perso/mes-cours" exact>
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Book /></span>
                            <span className='mobileBar__text'>Cours</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="/espace-perso/mes-devoirs" exact>
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Server /></span>
                            <span className='mobileBar__text'>Agenda</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="/espace-perso/mes-notes" exact>
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Award /></span>
                            <span className='mobileBar__text'>Notes</span>
                        </li>                  
                    </NavLink>   
                </ul>
                }
                {roleAdmin &&
                <ul className='mobileBar__list'>
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='mobileBar__text'>Gestion des Classes</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Server /></span>
                            <span className='mobileBar__text'>Gestion des Annonces publiques</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                <li className="mobileBar__item">
                    <span className='mobileBar__icon'><Book /></span>
                    <span className='mobileBar__text'>Gestion des Matières</span>
                </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                <li className="mobileBar__item">
                    <span className='mobileBar__icon'><Users /></span>
                    <span className='mobileBar__text'>Gestion des profils</span>
                </li>                  
                    </NavLink>   
                </ul>
                }
                {roleTeacher &&
                <ul className='mobileBar__list'>
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='mobileBar__text'>Emploi du Temps</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Server /></span>
                            <span className='mobileBar__text'>Cours/Ressources</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Book /></span>
                            <span className='mobileBar__text'>Devoirs / Annonces</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='mobileBar__link' to="#">
                        <li className="mobileBar__item">
                            <span className='mobileBar__icon'><Users /></span>
                            <span className='mobileBar__text'>Mes classes</span>
                        </li>                  
                    </NavLink>   
                </ul>
                }
            </nav>
        </div>
  );
}

export default MobileBar;