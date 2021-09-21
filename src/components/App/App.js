// == Import
import Connection from '../Connection/index.js';
import Header from '../Header/index.js';
import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import AnnounceList from '../Announce/AnnounceList.js';


import './App.scss';


// == Composant
const App= () => {
  return (
    <div className="App">
      <Connection />
      <Header />
      <Intro />
      <AnnounceList />
      <Footer />
    </div>
  );
}

export default App;
