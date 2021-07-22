import React from 'react'
import '../style/about_section.scss'
import profile from '../images/profileBAOK.png';


function AboutSection() {
    return (
        <section className="About_section">
            <h2 className="container" id="apropos">À propos de moi</h2>
            <hr />
            <div className="about_information">
                <div className="profile" data-aos="fade-down">
                    <img src={profile} alt="profile" />
                </div>
                <div className="About_section-comment">
                    <h3>Je suis Romiale Ngoy <br /> <span>Qui suis-je ?,</span></h3>
                    <p>je suis développeur fullstack pationné du numérique avec beaucoup d'expérience dans le monde du développement web et web mobile, avec plusieurs réalisations validées par des clients satisfaits.</p>
                    <p> Spécialisé dans le domaine du dévelopement web et web mobile allant du front-end jusqu'au back-and, le UI et UX design.</p>
                    <a href="mailto:romialengoy5@gmail.com">Me contacter</a>
                    <a className="link_white" href="/documents/CV_romiale_ngoy.pdf" download>Télécharger Mon CV</a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
