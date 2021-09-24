import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


import { Calendar, Users, Book, Server, Award } from 'react-feather';

import './style.scss';


const Sidebar = ()  => {
    const roleStudent = useSelector((state) => state.user.roles.includes('ROLE_USER'));
    const roleAdmin = useSelector((state) => state.user.roles.includes('ROLE_ADMIN'));
    const roleTeacher = useSelector((state) => state.user.roles.includes('ROLE_TEACHER'));
    return (
        <div className="sidebar">
            <nav className='sidebar__menu'>
                {roleStudent &&
                <ul className='sidebar__list'>
                    <li className="sidebar__item">
                        <Link to="/espace-perso/monemploidutemps">
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='sidebar__span'>Mon emploi du temps</span>
                        </Link>   
                    </li> 
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Book /></span>
                            <span className='sidebar__span'>Mes cours</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__span'>Mon agenda</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Award /></span>
                            <span className='sidebar__span'>Mes notes</span>
                        </Link>   
                    </li>                  
                </ul>
                }
                {roleAdmin &&
                <ul className='sidebar__list'>
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='sidebar__span'>Gestion des Classes</span>
                        </Link>   
                    </li> 
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__span'>Gestion des Annonces publiques</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Book /></span>
                            <span className='sidebar__span'>Gestion des Matières</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Users /></span>
                            <span className='sidebar__span'>Gestion des profils</span>
                        </Link>   
                    </li>                  
                </ul>
                }
                {roleTeacher &&
                <ul className='sidebar__list'>
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                            <span className='sidebar__span'>Emploi du Temps</span>
                        </Link>   
                    </li> 
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Server /></span>
                            <span className='sidebar__span'>Cours/Ressources</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Book /></span>
                            <span className='sidebar__span'>Devoirs / Annonces</span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__icon'><Users /></span>
                            <span className='sidebar__span'>Mes classes</span>
                        </Link>   
                    </li>                  
                </ul>
                }
            </nav>
        </div>
  );
}

export default Sidebar;