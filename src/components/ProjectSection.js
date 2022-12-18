import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import userContext from '../context/userContext';
import ProjectCard from './ProjectCard';

const ProjectSection = () => {

    const { projects } = useContext(userContext);

    return (
        <div className="container my-5" style={{maxWidth: '1000px', margin: 'auto'}}>
            <h1 className="font-weight-light text-center">
                My <span className="text-info">Projects</span>
            </h1>
            <div className="lead text-center">I build projects just like this website</div>
            <div className="row my-5 pt-3 container mx-auto">
                {
                    projects.slice(0, 3).map((project) => {
                        return (
                            <div key={project.id} className="col-12 col-sm-6 col-md-4 my-2">
                                <ProjectCard project={project} />
                            </div>
                        )
                    })
                }
            </div>
            <div className="my-5" style={{ textAlign: 'right' }}>
                <div>
                    <Link to="/all-projects" className="text-dark">
                        <h5 style={{ display: "inline" }}>
                            See my projects
                            <i className="fas fa-arrow-right align-middle"></i>
                        </h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectSection;