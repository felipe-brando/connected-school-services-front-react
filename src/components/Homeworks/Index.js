import { Route, Switch, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import AddHomeworks from "./AddHomeworks";
import StudentHomeworks from './StudentHomeworks';
import TeacherHomeWorks from './TeacherHomeWorks';
import HomeworksList from './HomeworkList';

function Homeworks() {

    const userRole = useSelector((state) => state.user.roles);

    return (
        <Switch >
            {userRole[0] === 'ROLE_USER' &&
                <>
                    <Route path="/espace-perso/mes-devoirs" exact>
                        <StudentHomeworks />
                    </Route>
                </>
            }
            {userRole[0] === 'ROLE_TEACHER' &&
                <>
                    <Route path="/espace-perso/mes-devoirs" exact>
                        <TeacherHomeWorks />
                    </Route>

                    <Route path="/espace-perso/mes-devoirs/ajout" exact>
                        <AddHomeworks />
                    </Route>

                    <Route path="/espace-perso/mes-devoirs/liste/:id" exact>
                        <TeacherHomeWorks />
                        <HomeworksList />
                    </Route>
                </>
            }
        </Switch>
    )

}

export default Homeworks;