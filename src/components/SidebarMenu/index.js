import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";

import Sidebar from '../Sidebar';

import './style.scss';
import schoolPicture from '../../assets/img/school-small.jpeg'
// == Composant
const SidebarMenu = () => (
  <header className="sidebar">
    {/* <img className="logo" src ={schoolPicture} alt="Logo"/> */}
    <nav className="sidebar__menu">
      <NavLink to="/monespace/emploidutemps" 
      className="sidebar__menu-schedule">Emploi du temps</NavLink>
      <NavLink to="/monespace/mescours" className="sidebar__menu-lessons">Cours et Ressources</NavLink>
      <NavLink to="/monespace/mesactualites" className="sidebar__menu-news">Mon Agenda</NavLink>
      <NavLink to="/monespace/mesnotes" className="sidebar__menu-marks">Mes notes</NavLink>
    </nav>
  </header>
);

export default SidebarMenu;