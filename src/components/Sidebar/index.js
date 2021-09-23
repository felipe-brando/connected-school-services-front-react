import React, {useState} from 'react';

import { Link } from "react-router-dom";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";

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
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="sidebar-toggle">
                    <Link to="#" className='sidebar__menu-link'>
                        <AiIcons.AiOutlineClose />
                    </Link>
                </li>
            </ul>
        </nav>
    </> 
  );
}

export default Sidebar;