// == Import
import Connection from '../Connection/index.js';
import Header from '../Header/index.js';
import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import AnnouceList from '../Announce/AnnouceList.js';

import './style.scss';

// == Composant
const App= () => {
  return (
    <div className="app">
      <Connection />
      <Header />
      <Intro />
      <AnnouceList />
      <Footer />
    </div>
  );
}

export default App;
