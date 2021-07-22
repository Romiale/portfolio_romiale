import React from 'react'
import Link from '../images/link.svg';
import github from '../images/github.svg';

function ProjectItem({ projectImage, project }) {
    return (
        <div className="project_item">
            <div className="project_item-image"> <img src={projectImage} alt={project.imagePath} /> </div>
            <div className="project_item-comment">
                <h3>{project.title}</h3>
                <span>2021</span>
                <div><a href={project.gitHub_code_Link} target="_blank" rel="noopener noreferrer"><img src={github} alt="gitHub" /></a></div>
                <div><a href={project.projecturlddress} target="_blank" rel="noopener noreferrer"><img src={Link} alt="a" /></a></div>
            </div>
        </div>
    )
}

export default ProjectItem
