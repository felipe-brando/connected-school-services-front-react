// == Import
import Connection from '../Connection/index.js';
import Header from '../Header/index.js';
import Intro from '../Intro/index.js';
import Footer from '../Footer/Footer.js';
import AnnouceList from '../Announce/AnnouceList.js';


import './App.scss';


// == Composant
const App= () => {
  return (
    <div className="App">
      <Connection />
      <Header />
      <Intro />
      <AnnouceList />
      <Footer />
    </div>
  );
}

export default App;
