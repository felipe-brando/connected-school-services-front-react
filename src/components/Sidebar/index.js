import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";


import { Calendar, Users, Book, Server, Award, User } from 'react-feather';

import './style.scss';


const Sidebar = ()  => {
    const roleStudent = useSelector((state) => state.user.roles.includes('ROLE_USER'));
    const roleAdmin = useSelector((state) => state.user.roles.includes('ROLE_ADMIN'));
    const roleTeacher = useSelector((state) => state.user.roles.includes('ROLE_TEACHER'));
    return (
        <div className="sidebar">
            <nav className='sidebar__menu'>
                {roleStudent && // if I am a student
                <ul className='sidebar__list'>
                    <NavLink className='sidebar__link' to="/espace-perso" exact>
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><User /></span>
                            <span className='sidebar__text'>Espace perso</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='sidebar__link' to="/espace-perso/mon-emploi-du-temps" exact>
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Calendar /></span>
                            <span className='sidebar__text'>Mon emploi du temps</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='sidebar__link' to="/espace-perso/mes-cours" exact>
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Book /></span>
                            <span className='sidebar__text'>Mes cours</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="/espace-perso/mes-devoirs" exact>
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__text'>Mon agenda</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="/espace-perso/mes-notes" exact>
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Award /></span>
                            <span className='sidebar__text'>Mes notes</span>
                        </li>                  
                    </NavLink>   
                </ul>
                }
                {roleAdmin &&
                <ul className='sidebar__list'>
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='sidebar__text'>Gestion des Classes</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__text'>Gestion des Annonces publiques</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                <li className="sidebar__item">
                    <span className='sidebar__icon'><Book /></span>
                    <span className='sidebar__text'>Gestion des Matières</span>
                </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                <li className="sidebar__item">
                    <span className='sidebar__icon'><Users /></span>
                    <span className='sidebar__text'>Gestion des profils</span>
                </li>                  
                    </NavLink>   
                </ul>
                }
                {roleTeacher &&
                <ul className='sidebar__list'>
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='sidebar__text'>Emploi du Temps</span>
                        </li> 
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__text'>Cours/Ressources</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Book /></span>
                            <span className='sidebar__text'>Devoirs / Annonces</span>
                        </li>   
                    </NavLink>   
                    <NavLink className='sidebar__link' to="#">
                        <li className="sidebar__item">
                            <span className='sidebar__icon'><Users /></span>
                            <span className='sidebar__text'>Mes classes</span>
                        </li>                  
                    </NavLink>   
                </ul>
                }
            </nav>
        </div>
  );
}

export default Sidebar;