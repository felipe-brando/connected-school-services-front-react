import { Switch, Route } from 'react-router-dom';

import Sidebar from './index';
import Schedule from '../Schedule/Index';
import Lessons from '../Lessons/Index';
import Homeworks from '../Homeworks/Index';
import Marks from '../Marks/Index';


import './style.scss';

function SidebarSwitch() {

    return (
        <>
        <Sidebar />
        <Switch>            
            <Route path="/espace-perso/monemploidutemps" exact>
                <Schedule />
            </Route>
            <Route path="/espace-perso/mescours" exact>
                <Lessons />
            </Route>
            <Route path="/espace-perso/mesdevoirs" exact>
                <Homeworks />
            </Route>
            <Route path="/espace-perso/mesnotes" exact>
                <Marks />
            </Route>
        </Switch>
        </>
    )
}

export default SidebarSwitch;