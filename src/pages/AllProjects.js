import React, { useContext } from 'react';
import userContext from '../context/userContext';
import ProjectCard from '../components/ProjectCard';

const AllProjects = () => {

    const { projects } = useContext(userContext);
    return (
        <div className="container text-center my-5 py-5">
            <h1 className="fw-semibold py-5">
                My All<span className="text-info"> Projects</span>
            </h1>
            <div className="row my-4 pt-4">
                {projects.map((project) => (
                    <div key={project.id} className="col-12 col-md-6 py-3">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllProjects;