import { Switch, Route } from 'react-router-dom';

import AnnounceList from './AnnounceList';
import AnnouncePage from './AnnouncePage';
import AddAnnounce from './AddAnnounce';
import ModifyAnnounce from './ModifyAnnounce'

import './style.scss';


const Announce = () => {
    

    return (
        <Switch>
            <Route path="/" exact>
                <AnnounceList filter="home" />
            </Route>
            <Route path="/annonces" exact>
                <AnnounceList filter="Actualités" />
            </Route>
            <Route path="/annonces/ajout" exact>
                <AddAnnounce />
            </Route>
            <Route path="/annonces/maj/:id" exact>
                <ModifyAnnounce />
            </Route>
            <Route path="/annonces/:id" exact >
                <AnnouncePage />
            </Route>
            <Route path="/annonces/categories" exact>
                <AnnounceList />
            </Route>
            <Route path="/annonces/categories/:id" exact>
                <AnnounceList filter="categories" />
            </Route>
            <Route><div>404 des annonces si adresse ne correcpond à rien</div></Route>
        </Switch>

    );
};

export default Announce;