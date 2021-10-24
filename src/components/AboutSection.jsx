import React from 'react'
import '../style/about_section.scss'
import cv from '../documents/CV_romiale_ngoy.pdf'


function AboutSection() {
    return (
        <section className="About_section">
            <div className="about_information">
                <div className="profile" data-aos="fade-down">
                </div>
                <div className="About_section-comment">
                    <h2 className="container" id="apropos">À PROPOS DE MOI</h2>
                    <hr />
                    <p>Je suis développeur fullstack pationné du numérique avec beaucoup d'expérience dans le monde du développement web et web mobile, avec plusieurs réalisations validées par des clients satisfaits.</p>
                    <p> Pour moi la qualité du code, la satisfaction du client, une équipe motivée sont primordiales<span>|</span> </p>
                    <a  className="btn btn-primary" href="mailto:romialengoy5@gmail.com">Me contacter</a>
                    <a className="btn btn-outline-primary" href={cv} >Télécharger mon CV</a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection
