// == Import
import React from 'react';

import './style.scss';

// == Composant
const About = () => {
    return (
        <div className="about"> 
            <h1 className="about__title">Présentation du Collège</h1>           
            <section className="about__content">
                <p>Bienvenus au Collège Mark Zuckerberg.</p>
                <p>Notre collège est installé depuis 2014 dans la colline domine la ville. Notre un établissement qui compte environ 500 élèves.</p>
                <p>L'établissement dispose d'un internat.</p>
                <p>Toute l’équipe de l’établissement (pédagogie, encadrement et administration) a à cœur la réussite des élèves et leur épanouissement.</p>
            </section>
        </div>

    )
}
// == Export
export default About;