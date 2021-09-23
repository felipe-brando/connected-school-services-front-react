import React, {useState} from 'react';

import { Link } from "react-router-dom";
import {SideBarData} from '.';'./SidebarData';
import { IconContext } from 'react-icons';

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

import './style.scss';


function Sidebar() {
    const [sidebar, setSideBar] = useState(false);

    const showSideBar = () => setSideBar(!sidebar);

    return (
    <>    
        <div className="sidebar">
            <Link to="#" className='sidebar__menu-link'>
                <FaIcons.FaBars onClick={showSideBar} />
            </Link>
        </div>
        <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
            <ul className='sidebar-menu-items' onClick>
                <li className="sidebar-toggle">
                    <Link to="#" className='sidebar__menu-link'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
                {SideBarData.map((item, index) => {
                    return (
                        <li key={index} className={item.cName}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>                   
                    );
                })}
            </ul>
        </nav>
    </> 
  );
}

export default Sidebar;