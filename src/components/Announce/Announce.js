import { Switch, Route, Prompt } from 'react-router-dom';
import { useSelector } from 'react-redux';

import AnnounceList from './AnnounceList';
import AnnouncePage from './AnnouncePage';
import AddAnnounce from './AddAnnounce';
import ModifyAnnounce from './ModifyAnnounce';
import CategoryList from './CategoryList';
import Sidebar from '../Sidebar/';


import './style.scss';



const Announce = () => {

    const userRole = useSelector((state) => state.user.roles);


    return (
        <Switch>
            <Route path="/" exact>
                <AnnounceList filter="home" />
            </Route>
            <Route path="/annonces/categories" exact>
                <CategoryList />
            </Route>
            <Route path="/annonces/categories/:id" exact>
                <AnnounceList filter="categories" />
            </Route>
            <Route path="/annonces" exact>
                <AnnounceList filter="Actualités" />
            </Route>
            {userRole[0] === "ROLE_ADMIN" &&
                <Route path="/annonces/ajout" exact>
                    <Sidebar />
                    <AddAnnounce />
                </Route>
            }
            <Route path="/annonces/maj/:id" exact>
                <ModifyAnnounce />
            </Route>
            <Route path="/annonces/:id" exact >
                <AnnouncePage />
            </Route>
            <Route><div>404 - Annonces - Cette adresse ne correcpond à rien</div></Route>
        </Switch>

    );
};

export default Announce;