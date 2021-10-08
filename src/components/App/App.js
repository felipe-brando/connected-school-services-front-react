// == Import
import { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../Header/index.js';
import About from '../About/index.js';
import Contact from '../Contact/index.js';
import Modal from '../Modal/Modal';


import Pages from '../Pages/index.js';

import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import Announce from '../Announce/Announce.js';
import Team from '../Team/index.js';

import './App.scss';


// == Composant
const App = () => {
  const logged = useSelector((state) => state.user.logged);

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  useEffect(() => {
    dispatch({
      type: 'CLOSE_LOGIN_WINDOW',
    });
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Modal />
      <Header />
      <main className="main-content">
      <Switch>
        <Route path="/" exact>
          <Intro />
          <Announce />
        </Route>
        <Route path="/a-propos" exact>
          <About />
        </Route>
        <Route path="/annonces/" component={Announce} />
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/equipe" exact>
          <Team />
        </Route>
        <Route path="/espace-perso">
          {logged ?
            <Pages />:       
            <div>403</div>}   
        </Route>
        <Route>
          <div>404</div>
        </Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
