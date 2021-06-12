import React from 'react'
import link from '../images/link.svg';
import github from '../images/github.svg';

function ProjectItem({ projectImage, project }) {
    return (
        <div className="project_item">
            <div className="project_item-image"> <img src={projectImage} alt={project.imagePath} /> </div>
            <div className="project_item-comment">
                <h3>{project.title}</h3>
                <span>2021</span>
                <div><img src={github} alt="gitHub" /></div>
                <div><img src={link} alt="link" /></div>
            </div>
        </div>
    )
}

export default ProjectItem
