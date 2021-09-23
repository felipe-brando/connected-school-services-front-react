import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title:'Mon emploi du temps',
        path:'/espace-perso/monemploidutemps',
        icon:<FaIcons.FaCalendarDay/>,
        cName:'sidebar-text',
    },
    {
        title:'Mes cours',
        path:'/espace-perso/mescours',
        icon:<FaIcons.FaPenFancy/>,
        cName:'sidebar-text',
    },
    {
        title:'Mon agenda',
        path:'/espace-perso/mesdevoirs',
        icon:<FaIcons.FaSpotify/>,
        cName:'sidebar-text',
    },
    {
        title:'Mes notes',
        path:'/espace-perso/mesnotes',
        icon:<FaIcons.FaChartBar/>,
        cName:'sidebar-text',
    },
]