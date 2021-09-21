// == Import
import { Route, Switch } from 'react-router-dom';
import {useSelector} from 'react-redux';

import Connection from '../Connection/index.js';
import Header from '../Header/index.js';
import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import AnnounceList from '../Announce/AnnounceList.js';


import './App.scss';


// == Composant
const App= () => {
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="App">
      <Connection />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Intro />
          <AnnounceList />
        </Route>
        <Route path="/a-propos">
          <div>A propos</div>
        </Route>
        <Route path="/actualites">
          <div>Actualités</div>
        </Route>
        <Route path="/contact">
          <div>Contact</div>
        </Route> 
        <Route path="/espace-perso">
        {logged ? 
          <div>Espace personnel</div> :
          <div>403</div>}
        </Route> 
        <Route>  
          <div>404</div>
        </Route> 
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
