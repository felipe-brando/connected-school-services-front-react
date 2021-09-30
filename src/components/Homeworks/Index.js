import { Route, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import AddHomeworks from "./AddHomeworks";
import StudentHomeworks from './StudentHomeworks';
import TeacherHomeWorks from './TeacherHomeWorks';

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
                </>
            }
        </Switch>
    )

}

export default Homeworks;