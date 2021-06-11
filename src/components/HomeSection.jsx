import React from 'react';
import '../style/home_section.scss';
import profileImage from '../images/profileOK.png';


function HomeSection() {
    return (

        <section className="home_section">

            <div className="home_section_comment">
                <h1>Salut !, je suis Romiale Ngoy</h1>
                <p>developpeur fullstack, UX et UI disigner expérimenté dans le domaine du web et web-mobile avec plus de 5 ans d'expériance dans le domaine</p>
                <button>Me contacter</button>
            </div>
            <div className="home_section_image" data-aos="fade-down">
                <img src={profileImage} alt="profileImage" />
            </div>

        </section>

    )
}

export default HomeSection
