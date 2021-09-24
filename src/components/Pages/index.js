
import { Switch, Route } from 'react-router-dom';

import MobileBar from '../MobileBar/index';
import Sidebar from '../Sidebar/index';
import Schedule from '../Schedule/Index';
import Lessons from '../Lessons/Index';
import Homeworks from '../Homeworks/Index';
import Marks from '../Marks/Index';

import './style.scss';

const Pages = () => {

    return (
        <main className="main-content">
            <Sidebar />
            <Switch>            
                <Route path="/espace-perso/mon-emploi-du-temps" exact>
                    <Schedule />
                </Route>
                <Route path="/espace-perso/mes-cours" exact>
                    <Lessons />
                </Route>
                <Route path="/espace-perso/mes-devoirs" exact>
                    <Homeworks />
                </Route>
                <Route path="/espace-perso/mes-notes" exact>
                    <Marks />
                </Route>
            </Switch>
            <MobileBar />
        </main>
    )
}

export default Pages;