
import { Switch, Route } from 'react-router-dom';

import MobileBar from '../MobileBar/index';
import Sidebar from '../Sidebar/index';
import Schedule from '../Schedule/Index';
import Lessons from '../Lessons/index';
import Homeworks from '../Homeworks/Index';
import Marks from '../Marks/Index';
import DaySchedule from '../Schedule/DaySchedule';

import './style.scss';

const Pages = () => {

    return (
        <div className="pages">
            <Sidebar />
            <div className="pages__content">
                <Switch>
                    <Route path="/espace-perso/" exact>
                        <DaySchedule />
                    </Route>
                    <Route path="/espace-perso/mon-emploi-du-temps" exact>
                        <Schedule />
                    </Route>
                    <Route path="/espace-perso/mes-cours" exact>
                        <Lessons />
                    </Route>
                    <Route path="/espace-perso/mes-devoirs">
                        <Homeworks />
                    </Route>
                    <Route path="/espace-perso/mes-notes" exact>
                        <Marks />
                    </Route>
                </Switch>
            </div>
            <MobileBar />
        </div>
    )
}

export default Pages;