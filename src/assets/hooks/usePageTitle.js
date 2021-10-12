import { useEffect} from 'react'
import { useLocation } from 'react-router-dom';

function usePageTitle() {


const location = useLocation();
  console.log(location);

  useEffect(() => {
    let title;
    if (location.pathname === '/') {
        title = 'CSS | Accueil';
    }
    else if (location.pathname === '/a-propos') {
        title = 'CSS | A propos';
    }
    else if (location.pathname === '/annonces') {
        title = 'CSS | Annonces';
      }
      
    else if (location.pathname === '/contact') {
        title = 'CSS | Contact';
      }
      
    else if (location.pathname === '/equipe') {
        title = 'CSS | Equipe';
      }
      
    else if (location.pathname === '/espace-perso') {
        title = 'CSS | Espace Perso';
      }

    else {
        const page = location.pathname.replace('/', '');
        const pageName = page.charAt(0).toUpperCase() + page.slice(1);
        title = `${pageName} - Connected School Services`;
    }
    document.title = title;
  }, [location]);
}

export default usePageTitle;