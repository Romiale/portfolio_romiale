import React from 'react';
import '../style/realisations.scss';
import ProjectItem from '../components/ProjectItem';
import projects from '../projects.json';
import kd from '../images/kd.png';
import cine from '../images/cine.png';
import maquette3 from '../images/maquette3.jpg';
import maquettage from '../images/maquettage.png';
import protfolio from '../images/portfolio.png';
import visite from '../images/visite.png';

function Realisations() {

    return (
        <section className="projects" id="réalisations">
            <div>
                <h2>MES RÉALISATIONS</h2>
                <hr />
            </div>
            <div className="projects_list">
              <a href={projects[0].projecturlddress}><ProjectItem projectImage={maquette3} project={projects[0]} /></a> 
              <a href={projects[1].projecturlddress}><ProjectItem projectImage={kd} project={projects[1]} /></a>
              <a href={projects[2].projecturlddress}><ProjectItem projectImage={protfolio} project={projects[2]} /></a>
              <a href={projects[3].projecturlddress}><ProjectItem projectImage={cine} project={projects[3]} /></a>
              <a href={projects[4].projecturlddress}><ProjectItem projectImage={maquettage} project={projects[4]} /></a>
              <a href={projects[5].projecturlddress}><ProjectItem projectImage={visite} project={projects[5]} /></a>
            </div>
        </section>
    )
}

export default Realisations
