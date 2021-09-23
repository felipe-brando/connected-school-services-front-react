import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SideBarData = [
    {
        title:'Schedule',
        path:'/monespace/emploidutemps',
        icon:<FaIcons.FaCalendarDay/>,
        cName:'sidebar-text',
    },
    {
        title:'Lessons',
        path:'/monespace/mescours',
        icon:<FaIcons.FaPenFancy/>,
        cName:'sidebar-text',
    },
    {
        title:'News',
        path:'/monespace/mesactualites',
        icon:<FaIcons.FaSpotify/>,
        cName:'sidebar-text',
    },
    {
        title:'Marks',
        path:'/monespace/mesnotes',
        icon:<FaIcons.FaChartBar/>,
        cName:'sidebar-text',
    },
]