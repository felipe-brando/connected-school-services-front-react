import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import {SideBarData} from './SidebarData';

import { Calendar } from 'react-feather';

import './style.scss';


const Sidebar = ()  => {
    const roleStudent = useSelector((state) => state.user.roles['ROLE_USER']);
    const roleTeacher = useSelector((state) => state.user.roles['ROLE_TEACHER']);
    return (
        <div className="sidebar">
            <nav className='sidebar__menu'>
                {roleStudent &&
                <ul className='sidebar__list'>
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Mon emploi du temps</span>
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                        </Link>   
                    </li> 
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Mes cours</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Mon agenda</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Mes notes</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>                  
                </ul>
                }
                {roleTeacher &&
                <ul className='sidebar__list'>
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Coucou</span>
                            <span className='sidebar__icon'><Calendar value={{color: '#fff'}} /></span>
                        </Link>   
                    </li> 
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Coucou</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>coucou</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>   
                    <li className="sidebar__item">
                        <Link to="#">
                            <span className='sidebar__span'>Mes notes</span>
                            <span className='sidebar__icon'><Calendar /></span>
                        </Link>   
                    </li>                  
                </ul>
                }
            </nav>
        </div>
  );
}

export default Sidebar;