import { Switch, Route } from 'react-router-dom';


import Schedule from '../Schedule/Index';
import Lessons from '../Lessons/Index';
import Homeworks from '../Homeworks/Index';
import Marks from '../Marks/Index';


import './style.scss';

function SidebarSwitch() {

    return (
        <Switch>
            <Route path="/espace-perso/emploidutemps" exact>
                <Schedule />
            </Route>
            <Route path="/espace-perso/lecon" exact>
                <Lessons />
            </Route>
            <Route path="/espace-perso/devoirs" exact>
                <Homeworks />
            </Route>
            <Route path="/espace-perso/notes" exact>
                <Marks />
            </Route>
        </Switch>
    )
}






export default SidebarSwitch;