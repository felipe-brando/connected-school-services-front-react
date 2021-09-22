import { Switch, Route } from 'react-router-dom';

import AnnounceList from './AnnounceList';
import AnnouncePage from './AnnouncePage';

import './style.scss';


const Announce = () => {

    return (
        <Switch>
            <Route path="/" exact>
                <AnnounceList filter="global"/>
                <h1>Liste d'annonce de l'accueil - catég global</h1>
            </Route>
            <Route path="/annonces" exact>
                <AnnounceList filter="global"/>
                <h1>Affichage annonce list via actualités à filtrer w/ global & islogged & classroom</h1>
            </Route>
            <Route path="/annonces/:id" exact >
                <AnnouncePage />
                <h1>Affichage announce de l'id à filtrer w/ global & islogged & classroom</h1>
            </Route>
            <Route path="/annonces/categories" exact>
                <AnnounceList filter="categories"/>
                <h1>Affichage categories list à filtrer w/ global & islogged & classroom</h1>
            </Route>
            <Route path="/annonces/categories/:id" exact>
                <h1>Affichage list annonce de la catégorie à filtrer w/ global & islogged & classroom</h1>
                <AnnouncePage />
            </Route>
            <Route><div>404 des annonces si adresse ne correcpond à rien</div></Route>
        </Switch>

    );
};

export default Announce;