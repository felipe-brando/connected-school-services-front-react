// == Import
import './style.scss';
import image from '../../assets/img/school.jpg';
// == Composant
const Intro = () => (
  <section className="intro">
    <h2 className="intro__title">Nom de l'établissement</h2>
    <img className="intro__image" src={image} alt="Nom de l'établissement"/>
  </section>
);

export default Intro;
