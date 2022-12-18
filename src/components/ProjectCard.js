import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  return (
    <div className="card shadow h-100" style={{ borderRadius: '20px' }}>
      <img src={project.imageUrl} alt="project1 img" className="p-2 card-img-top" style={{ borderRadius: '20px' }} />
      <div className="card-body">
        <h4 className="card-title">{project.title}</h4>
        <div className="card-text">
          {project.desc}
        </div>
        <Link to={`/project/${project.id}`} className="project-link pt-2">
          more details
          <i className="fa-solid fa-right-long"></i>
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard;