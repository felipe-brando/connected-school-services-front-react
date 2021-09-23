// == Import
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Connection from '../Connection/index.js';
import Header from '../Header/index.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';


import Sidebar from '../Sidebar/index.js';

import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import Announce from '../Announce/Announce.js';

import './App.scss';


// == Composant
const App = () => {
  const logged = useSelector((state) => state.user.logged);
  return (
    <div className="App">
      <Connection />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Intro />
          <Announce />
        </Route>
        <Route path="/a-propos">
          <div>A propos</div>
          <About />
        </Route>
        <Route path="/annonces/" component={Announce} />
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/espace-perso">
          {logged ?
            <div>Espace personnel</div> :
            <div>403</div>}   
        </Route>
        <Route path="/monespace">
        <Sidebar />
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
