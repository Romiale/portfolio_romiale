import React from 'react';
import '../style/realisations.scss';
import ProjectItem from '../components/ProjectItem';
import projects from '../projects.json';
import kd from '../images/kd.png';
import cine from '../images/cine.png';
import maquette3 from '../images/maquette3.jpg';
import protfolio from '../images/portfolio.png';
import visite from '../images/visite.png';

function Realisations() {

    return (
        <section className="projects" id="réalisations">
            <div>
                <h2>Mes réalisations</h2>
                <hr />
            </div>
            <div className="projects_list">
                <ProjectItem projectImage={maquette3} project={projects[0]} />
                <ProjectItem projectImage={kd} project={projects[1]} />
                <ProjectItem projectImage={protfolio} project={projects[2]} />
                <ProjectItem projectImage={cine} project={projects[3]} />
                <ProjectItem projectImage={maquette3} project={projects[4]} />
                <ProjectItem projectImage={visite} project={projects[5]} />
            </div>
        </section>
    )
}

export default Realisations
